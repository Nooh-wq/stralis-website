import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TEAM_EMAIL = "hello@thestralis.com";
const FROM_CONTACT = "The Stralis <contact@thestralis.com>";
const FROM_HELLO   = "The Stralis <hello@thestralis.com>";
const BOOK_A_CALL  = "https://cal.com/noohthestralis/30min";

function confirmationHtml(name: string) {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thanks for reaching out — The Stralis</title>
</head>
<body style="margin:0;padding:0;background:#000000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#000000;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

          <!-- Wordmark -->
          <tr>
            <td style="padding-bottom:48px;">
              <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#ffffff;">THE STRALIS</span>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:40px;">
              <div style="height:1px;background:#2a2a2a;"></div>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="padding-bottom:20px;">
              <h1 style="margin:0;font-size:28px;font-weight:600;line-height:1.15;letter-spacing:-0.02em;color:#ffffff;">
                Thanks for reaching out, ${firstName}.
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding-bottom:16px;">
              <p style="margin:0;font-size:16px;line-height:1.6;color:#aeaeae;">
                We've received your message and will get back to you within one business day.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:40px;">
              <p style="margin:0;font-size:16px;line-height:1.6;color:#aeaeae;">
                If you'd rather skip the back-and-forth, book a call directly and we'll talk through your project together.
              </p>
            </td>
          </tr>

          <!-- CTA button -->
          <tr>
            <td style="padding-bottom:48px;">
              <a href="${BOOK_A_CALL}"
                 style="display:inline-block;background:#FF6A00;color:#000000;font-size:15px;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:999px;letter-spacing:-0.01em;">
                Book a call &rarr;
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:32px;">
              <div style="height:1px;background:#2a2a2a;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td>
              <p style="margin:0;font-size:13px;line-height:1.5;color:#4c4c4c;">
                The Stralis &mdash; IT engineering studio<br/>
                <a href="mailto:hello@thestralis.com" style="color:#4c4c4c;text-decoration:none;">hello@thestralis.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, company, message, projectType } =
      await req.json() as {
        name?: string;
        email?: string;
        company?: string;
        message?: string;
        projectType?: string;
      };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const notificationLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company?.trim() ? `Company: ${company}` : null,
      `Project type: ${projectType ?? "Not specified"}`,
      "",
      "Message:",
      message,
    ].filter(Boolean) as string[];

    // Send both emails in parallel
    await Promise.all([
      // 1. Internal notification to the team
      resend.emails.send({
        from: FROM_CONTACT,
        to: TEAM_EMAIL,
        replyTo: email,
        subject: `New enquiry — ${projectType ?? "General"} — ${name}`,
        text: notificationLines.join("\n"),
      }),
      // 2. Branded confirmation to the visitor
      resend.emails.send({
        from: FROM_HELLO,
        to: email,
        replyTo: TEAM_EMAIL,
        subject: "We received your message — The Stralis",
        html: confirmationHtml(name),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
