"use client"
import { LoginForm } from "@/components/login-form"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AuthPage() {
    const router = useRouter()

    const onLogin = async (data: FormData) => {
        const res = await signIn("credentials", {
            email: data.get("email"),
            password: data.get("password"),
            redirect: false,
        })

        if (res?.error) return alert("Sai tài khoản")

        router.push("/admin")
    }


    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm onSubmit={onLogin} />
            </div>
        </div>
    )
}
