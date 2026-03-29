//GET, POST, PUT, PATCH, DELETE

import { NextResponse } from "next/server";
import { getUsers } from "../../service";

export async function GET() {
    const data = [1, 2, 3, 4, 5]

    return NextResponse.json({ nextRes: data })
}