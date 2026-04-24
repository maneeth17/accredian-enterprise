import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

interface ContactFormData {
  fullName: string;
  workEmail: string;
  company: string;
  designation: string;
}

const getDb = () => {
  if (!process.env.DATABASE_URL) return null;
  return neon(process.env.DATABASE_URL);
};

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    const { fullName, workEmail, company, designation } = data;

    if (!fullName || !workEmail || !company || !designation) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const sql = getDb();
    if (sql) {
      await sql`INSERT INTO leads (full_name, work_email, company, designation) VALUES (${fullName}, ${workEmail}, ${company}, ${designation})`;
    }

    return NextResponse.json({ message: "Form submitted successfully", success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}