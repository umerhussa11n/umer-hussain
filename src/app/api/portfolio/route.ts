import { NextResponse } from "next/server";
import APIResponse from "../../interfaces/api-response"
import  portfolio from '../portfolio'

// Portfolio data



export async function GET() {
  try {
    // stimulate api delay
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json<APIResponse>({
      success: true,
      data: portfolio,
      message: "success",
      status: 400
    });
  } catch (error) {    
    return NextResponse.json<APIResponse>({
      success: false,
      data: [],
      status: 500,
      message: "Error"
    });
  }
}
