import { db } from "@/utils/firebase"
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"

const collectionTodosRef = collection(db, 'todos')

export const getTodos = async () => {
    const data = await getDocs(collectionTodosRef)
    const docs = data.docs.map(i => ({ ...i.data(), id: i.id }))
    return docs
}

export const addTodo = async (task: string) => {
    await addDoc(collectionTodosRef, { task })
    return getTodos()
}

export const getTodoDetail = async (id: string) => {
    // const data = await getDocs(query(collectionTodosRef, where('task', '==', id)))
    // const docs = { ...data.docs[0].data(), id: data.docs[0].id }
    const data = await getDoc(doc(collectionTodosRef, id))
    const docs = { ...data.data(), id: data.id }
    return docs
}