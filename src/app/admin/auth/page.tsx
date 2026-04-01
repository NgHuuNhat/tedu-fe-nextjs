"use client"
import { ICreateAdminInput } from "@/app/features/managers/type"
import { LoginForm } from "@/components/login-form"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function AuthPage() {
    const router = useRouter()

    const onLogin = async (data: ICreateAdminInput) => {
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
            callbackUrl: "/admin"
        })

        if (res?.error) {
            toast.error(res.error) // 👈 hiển thị đúng lỗi BE
            return
        }

        toast.success("Login thanh cong")
        router.push("/admin")
    }


    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm onLogin={onLogin} />
            </div>
        </div>
    )
}
