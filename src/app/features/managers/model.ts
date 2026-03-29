import { addDoc, collection, getDoc, getDocs, query, Timestamp, where } from "firebase/firestore";
import { IAdminDb, ICreateAdminInput } from "./type";
import { COLLECTIONS } from "@/constants/commont";
import { db } from "@/utils/firebase";
import { hashPassword } from "@/utils/common/password";

const adminRef = collection(db, COLLECTIONS.ADMIN)

export const findAdminByEmail = async (email: string): Promise<IAdminDb> => {
    const exitedAdmin = await getDocs(query(adminRef, where('email', '==', email)))
    if (exitedAdmin.docs.length) throw Error('Email is exited!')
    const admin = exitedAdmin.docs[0].data() as IAdminDb
    return {
        ...admin,
        id: exitedAdmin.docs[0].id
    }
}

export const createAdmin = async (data: ICreateAdminInput) => {
    const exitedAdmin = await findAdminByEmail(data.email)

    const hashedPassword = await hashPassword(data.password)

    const newAdminRef = await addDoc(adminRef, {
        email: data.email,
        password: hashedPassword,
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
    })

    const newAdmin = await getDoc(newAdminRef)

    return { id: newAdmin.id, ...newAdmin.data() }
}