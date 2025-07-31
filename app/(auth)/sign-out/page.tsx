import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).delete("session"); // Clear session
  return NextResponse.json({ message: "Signed out successfully" }, { status: 200 });
}
