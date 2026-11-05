import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, rollNumber, department, primaryDomain, whyJoin } = body;

    if (!fullName || !email || !rollNumber || !whyJoin) {
      return NextResponse.json(
        { error: "Required fields missing." },
        { status: 400 }
      );
    }

    const applicationId = `DEVS-APP-${Math.floor(10000 + Math.random() * 90000)}`;

    return NextResponse.json({
      success: true,
      applicationId,
      applicant: { fullName, email, rollNumber, department, primaryDomain },
      status: "UNDER_REVIEW",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit recruitment application." },
      { status: 500 }
    );
  }
}

