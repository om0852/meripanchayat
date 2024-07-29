import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req) {
  const { email } = await req.json();

  try {
    // const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    // const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    // const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    // let testAcount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "smartcoder0852@gmail.com",
        pass: "iuyk wfjm wswv ejyq",
      },
    });
    // Function to generate OTP
    function generateOTP() {
      // Declare a digits variable
      // which stores all digits
      let digits = "0123456789";
      let OTP = "";
      let len = digits.length;
      for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * len)];
      }

      return OTP;
    }

    const mail = await transporter.sendMail({
      from: "smartcoder0852@gmail.com",
      to: email,
      subject: `Website activity from ${email}`,
      html: `
            <h1>Your otp for creating a account is ${generateOTP()}</h1>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent", mail });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
  }
}
