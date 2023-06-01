import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

let theme = "";

export async function GET() {
  return NextResponse.json({ theme });
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  theme = data.theme;

  return new NextResponse();
}
