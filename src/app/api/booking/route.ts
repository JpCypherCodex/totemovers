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
    const {
      name,
      email,
      phone,
      package: pkg,
      deliveryDate,
      address,
      city,
      notes,
    } = body;

    if (!name || !email || !phone || !pkg || !deliveryDate || !address || !city) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email notification
    const resend = getResend();
    await resend.emails.send({
      from: "Tote Movers Booking <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      subject: `New Booking: ${pkg} — ${name}`,
      html: `
        <h2>New Tote Reservation</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Package</td><td style="padding:8px;border:1px solid #ddd;">${pkg}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Delivery Date</td><td style="padding:8px;border:1px solid #ddd;">${deliveryDate}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Address</td><td style="padding:8px;border:1px solid #ddd;">${address}, ${city}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Notes</td><td style="padding:8px;border:1px solid #ddd;">${notes || "None"}</td></tr>
        </table>
      `,
    });

    // Also log to Google Sheets if configured
    if (process.env.GOOGLE_SHEETS_WEBHOOK) {
      await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          type: "booking",
          package: pkg,
          deliveryDate,
          address: `${address}, ${city}`,
          name,
          email,
          phone,
          notes: notes || "",
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
