import { addTodo, getTodos } from "@/app/todos/feature"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = await getTodos()
    return NextResponse.json(data)
}

export const POST = async (req: Request) => {
    const data = await req.json()
    const newData = await addTodo(data.task)
    return NextResponse.json(newData)
}