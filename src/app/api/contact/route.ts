import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "hello@totemovers.com";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email notification
    const resend = getResend();
    const result = await resend.emails.send({
      from: "MoverTotes Contact <noreply@totemovers.com>",
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone || "N/A"}</td></tr>
        </table>
        <h3>Message:</h3>
        <p style="padding:12px;background:#f5f5f5;border-radius:8px;">${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message, detail: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, emailId: result.data?.id });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
