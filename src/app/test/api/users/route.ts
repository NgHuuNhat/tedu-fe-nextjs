//GET, POST, PUT, PATCH, DELETE

import { NextResponse } from "next/server";
import { getUsers } from "../../service";

export async function GET() {
    const data = await getUsers()

    return NextResponse.json({ nextRes: data })
}