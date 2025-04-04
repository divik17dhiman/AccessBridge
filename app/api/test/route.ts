import { NextResponse } from "next/server";
import pa11y from "pa11y";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const url = searchParams.get("url");

        if (!url) {
            return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });
        }

        const result = await pa11y(url);

        return NextResponse.json(result);
    } catch (error) {
        console.error("Pa11y Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
