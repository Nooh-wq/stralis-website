import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "hello@thestralis.com";
const FROM = "The Stralis Contact Form <contact@thestralis.com>";

export async function POST(req: NextRequest) {
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

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company?.trim() ? `Company: ${company}` : null,
      `Project type: ${projectType ?? "Not specified"}`,
      "",
      "Message:",
      message,
    ].filter(Boolean) as string[];

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New enquiry — ${projectType ?? "General"} — ${name}`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
