import User from "@/app/modals/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    // const user
    const userlogin = await User.findOne({ email: email });
    if (userlogin) {
      return NextResponse.json(
        { message: "Account already exist" },
        { status: 201 }
      );
    }
    
    const user = await User.create({email,password,userType:"user"})
      return NextResponse.json(
        { message: "Account Created Successfully" },
        { status: 200 }
      )
    
  } catch (error) {
    return NextResponse.json({message:error.message},{status:400});
  }
}
