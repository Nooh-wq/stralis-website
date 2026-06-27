import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TEAM_EMAIL  = "hello@thestralis.com";
const FROM_CONTACT = "The Stralis <contact@thestralis.com>";
const FROM_HELLO   = "The Stralis <hello@thestralis.com>";
const BOOK_A_CALL  = "https://cal.com/noohthestralis/30min";
const SITE_URL     = "https://thestralis.com";
const LOGO_URL     = `${SITE_URL}/brand/logo-white.png`;

/* ─── Shared email shell ─────────────────────────────────────────── */
function shell(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#000000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#000000;padding:40px 24px 56px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom:40px;">
              <a href="${SITE_URL}" style="text-decoration:none;">
                <img src="${LOGO_URL}" alt="The Stralis" width="120" height="auto"
                     style="display:block;border:0;outline:none;text-decoration:none;"/>
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding-bottom:36px;"><div style="height:1px;background:#2a2a2a;"></div></td></tr>

          ${content}

          <!-- Footer divider -->
          <tr><td style="padding-top:40px;padding-bottom:28px;"><div style="height:1px;background:#2a2a2a;"></div></td></tr>

          <!-- Footer -->
          <tr>
            <td>
              <p style="margin:0;font-size:12px;line-height:1.6;color:#4c4c4c;letter-spacing:0.01em;">
                The Stralis &mdash; IT engineering studio &mdash;
                <a href="mailto:${TEAM_EMAIL}" style="color:#4c4c4c;text-decoration:none;">${TEAM_EMAIL}</a>
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

/* ─── Confirmation email → visitor ──────────────────────────────── */
function confirmationHtml(name: string) {
  const firstName = name.split(" ")[0];
  return shell(`
    <!-- Eyebrow -->
    <tr>
      <td style="padding-bottom:16px;">
        <span style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#FF6A00;">
          Message received
        </span>
      </td>
    </tr>

    <!-- Headline -->
    <tr>
      <td style="padding-bottom:20px;">
        <h1 style="margin:0;font-size:26px;font-weight:600;line-height:1.15;letter-spacing:-0.02em;color:#ffffff;">
          Thanks for reaching out, ${firstName}.
        </h1>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding-bottom:14px;">
        <p style="margin:0;font-size:15px;line-height:1.65;color:#aeaeae;">
          We've received your message and will get back to you within one business day.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding-bottom:36px;">
        <p style="margin:0;font-size:15px;line-height:1.65;color:#aeaeae;">
          If you'd rather skip the back-and-forth, book a call directly and we'll talk through your project together.
        </p>
      </td>
    </tr>

    <!-- CTA -->
    <tr>
      <td>
        <a href="${BOOK_A_CALL}"
           style="display:inline-block;background:#FF6A00;color:#000000;font-size:14px;font-weight:600;text-decoration:none;padding:13px 26px;border-radius:999px;letter-spacing:-0.01em;">
          Book a call &rarr;
        </a>
      </td>
    </tr>
  `);
}

/* ─── Notification email → team ─────────────────────────────────── */
function notificationHtml(opts: {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  message: string;
}) {
  const { name, email, company, projectType, message } = opts;

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #2a2a2a;vertical-align:top;width:130px;">
        <span style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#4c4c4c;">
          ${label}
        </span>
      </td>
      <td style="padding:12px 0 12px 16px;border-bottom:1px solid #2a2a2a;vertical-align:top;">
        <span style="font-size:14px;color:#ebebeb;line-height:1.5;">${value}</span>
      </td>
    </tr>`;

  return shell(`
    <!-- Eyebrow -->
    <tr>
      <td style="padding-bottom:16px;">
        <span style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#FF6A00;">
          New enquiry
        </span>
      </td>
    </tr>

    <!-- Headline -->
    <tr>
      <td style="padding-bottom:32px;">
        <h1 style="margin:0;font-size:22px;font-weight:600;line-height:1.2;letter-spacing:-0.02em;color:#ffffff;">
          ${name} wants to work with you.
        </h1>
      </td>
    </tr>

    <!-- Details table -->
    <tr>
      <td style="padding-bottom:32px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          ${row("Name", name)}
          ${row("Email", `<a href="mailto:${email}" style="color:#FF6A00;text-decoration:none;">${email}</a>`)}
          ${company?.trim() ? row("Company", company) : ""}
          ${row("Project type", projectType ?? "Not specified")}
        </table>
      </td>
    </tr>

    <!-- Message -->
    <tr>
      <td style="padding-bottom:8px;">
        <span style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#4c4c4c;">
          Message
        </span>
      </td>
    </tr>
    <tr>
      <td style="padding-bottom:32px;">
        <div style="background:#111111;border-left:2px solid #FF6A00;padding:16px 20px;border-radius:0 4px 4px 0;">
          <p style="margin:0;font-size:14px;line-height:1.7;color:#aeaeae;white-space:pre-wrap;">${message}</p>
        </div>
      </td>
    </tr>

    <!-- Reply CTA -->
    <tr>
      <td>
        <a href="mailto:${email}?subject=Re: Your enquiry — The Stralis"
           style="display:inline-block;background:#FF6A00;color:#000000;font-size:14px;font-weight:600;text-decoration:none;padding:13px 26px;border-radius:999px;letter-spacing:-0.01em;">
          Reply to ${name.split(" ")[0]} &rarr;
        </a>
      </td>
    </tr>
  `);
}

/* ─── Route handler ──────────────────────────────────────────────── */
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

    await Promise.all([
      // Branded notification to the team
      resend.emails.send({
        from: FROM_CONTACT,
        to: TEAM_EMAIL,
        replyTo: email,
        subject: `New enquiry — ${projectType ?? "General"} — ${name}`,
        html: notificationHtml({ name, email, company, projectType, message }),
      }),
      // Branded confirmation to the visitor
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
