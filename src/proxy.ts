import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
  // Lấy token để kiểm tra đăng nhập
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  });

  const { pathname } = req.nextUrl;

  // In ra Terminal để bạn theo dõi (có thể xóa sau khi chạy tốt)
  console.log(`>>> Kiểm tra Path: ${pathname} | Đã login: ${!!token}`);

  // Chỉ xử lý các route bắt đầu bằng /admin
  if (pathname.startsWith("/admin")) {
    const isAuthPage = pathname.startsWith("/admin/auth");

    // TRƯỜNG HỢP 1: Chưa đăng nhập mà vào /admin (trừ trang auth)
    if (!token && !isAuthPage) {
      return NextResponse.redirect(new URL("/admin/auth", req.url));
    }

    // TRƯỜNG HỢP 2: Đã đăng nhập mà cố vào trang login (/admin/auth)
    if (token && isAuthPage) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

// Giữ nguyên config matcher để bao phủ các route admin
export const config = {
  matcher: ["/admin/:path*", "/admin"],
};