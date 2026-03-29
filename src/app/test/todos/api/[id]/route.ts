import { getTodoDetail } from "@/app/todos/feature"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: any) => {
    const { id } = await params
    const data = await getTodoDetail(id)
    return NextResponse.json({ data })
}