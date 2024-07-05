import connectMongoDB from "@/libs/mongodb";
import ProductModel from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, image, price, description } = await request.json();
    await connectMongoDB();
    await ProductModel.create({ name, image, price, description });
    return NextResponse.json({ message: "Product Created" }, { status: 201 });
  }
  
  export async function GET() {
    await connectMongoDB();
    const products = await ProductModel.find();
    return NextResponse.json({ products });
  }
  