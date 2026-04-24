import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  fullName: string;
  workEmail: string;
  company: string;
  designation: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    const { fullName, workEmail, company, designation } = data;

    if (!fullName || !workEmail || !company || !designation) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("Lead captured:", {
      fullName,
      workEmail,
      company,
      designation,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Form submitted successfully", success: true },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}