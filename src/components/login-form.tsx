"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

// 👉 schema validate
const formSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(3, "Mật khẩu tối thiểu 3 ký tự"),
})

type FormValues = z.infer<typeof formSchema>

type LoginFormProps = React.ComponentProps<"div"> & {
  onLogin?: (data: FormValues) => void
}

export function LoginForm({
  className,
  onLogin,
  ...props
}: LoginFormProps) {

  // 👉 init react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 👉 handle submit
  const handleSubmit = (data: FormValues) => {
    console.log("data:", data)
    onLogin?.(data)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FieldGroup>

              {/* EMAIL */}
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <FieldDescription className="text-red-500">
                    {form.formState.errors.email.message}
                  </FieldDescription>
                )}
              </Field>

              {/* PASSWORD */}
              <Field>
                <div className="flex items-center">
                  <FieldLabel>Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Input
                  type="password"
                  {...form.register("password")}
                />

                {form.formState.errors.password && (
                  <FieldDescription className="text-red-500">
                    {form.formState.errors.password.message}
                  </FieldDescription>
                )}
              </Field>

              {/* BUTTON */}
              <Field>
                <Button type="submit" className="w-full">
                  Login
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="w-full mt-2"
                >
                  Login with Google
                </Button>

                <FieldDescription className="text-center mt-2">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>

            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}