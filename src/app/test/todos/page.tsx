import React from 'react'
import { addTodo, getTodos } from './feature'
import { revalidatePath } from 'next/cache'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default async function TodosPage() {
    const data = await getTodos()

    const actionAddTask = async (formData: FormData) => {
        'use server'
        const task: any = formData.get('task-input')
        await addTodo(task)
        revalidatePath('/todos')
    }

    return (
        <div className='todos-page p-5 flex flex-col gap-5'>
            <div>TodosPage</div>
            {/* <div>{JSON.stringify(data)}</div> */}

            <form action={actionAddTask} className='todos-form flex'>
                <Input className='border' name='task-input' type="text" placeholder='nhap task...' />
                <Button variant="outline">add task</Button>
            </form>

            <ul className='todos-list flex flex-col gap-2'>
                {data.map((i: any) => (
                    <li key={i.id} className='border'>{i.task} - {i.id}</li>
                ))}
            </ul>
        </div>
    )
}
