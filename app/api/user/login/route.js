import User from "@/app/modals/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    // const user
    const userlogin = await User.findOne({ email: email });
    if (!userlogin) {
      return NextResponse.json(
        { message: "Account not found" },
        { status: 201 }
      );
    }
    if (userlogin.password == password) {
      return NextResponse.json(
        { message: "Login Sucessfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json({message:error.message},{status:400});
  }
}
