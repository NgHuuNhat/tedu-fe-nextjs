import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout-admin">
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-center" richColors/>
      </body>
    </div>
  );
}
