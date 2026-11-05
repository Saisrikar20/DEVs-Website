import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventSlug, name, email, rollNo, dept } = body;

    if (!name || !email || !rollNo) {
      return NextResponse.json(
        { error: "Name, email, and roll number are required." },
        { status: 400 }
      );
    }

    const ticketId = `DEVS-${(eventSlug || "EVENT").toUpperCase().slice(0, 5)}-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      success: true,
      ticketId,
      attendee: { name, email, rollNo, dept },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process RSVP registration." },
      { status: 500 }
    );
  }
}
