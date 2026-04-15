import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, package: pkg, deliveryDate, address, city, notes } = body;

    if (!name || !email || !phone || !pkg || !deliveryDate || !address || !city) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log to console for now — replace with email service later
    console.log("=== NEW BOOKING RESERVATION ===");
    console.log(`Package: ${pkg}`);
    console.log(`Delivery Date: ${deliveryDate}`);
    console.log(`Address: ${address}, ${city}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Notes: ${notes || "None"}`);
    console.log("================================");

    // TODO: Integrate email service here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Tote Movers <noreply@totemovers.com>',
    //   to: 'info@totemovers.com',
    //   subject: `New Booking: ${pkg} - ${name}`,
    //   text: `Package: ${pkg}\nDelivery Date: ${deliveryDate}\nAddress: ${address}, ${city}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nNotes: ${notes || 'None'}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
