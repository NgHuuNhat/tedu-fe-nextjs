import { db } from "@/utils/firebase"
import { collection, getDocs } from "firebase/firestore"

export const getUsers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                Array.from({ length: 20 }).map((_, i) => (
                    {
                        id: i + 1,
                        name: `user ${i + 1}`,
                    }
                ))
            )
        }, 1000)
    })
}

export const getFireBase = async () => {
    const data = getDocs(collection(db, 'test'))

    return (await data).docs.map(i => i.id)
}