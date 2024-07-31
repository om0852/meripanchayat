import Document from "@/app/modals/Document";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const data = await Document.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}
export async function POST(req) {
  try {
    const {title,url,createdAt}=await req.json();
    const data = await Document.create({title,url,createdAt});
    return NextResponse.json("Document Uploaded", { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}
export async function DELETE(req) {
  try {
    const {id}=await req.json();
    const data = await Document.findOneAndDelete({_id:id});
    return NextResponse.json("Document Uploaded", { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}
