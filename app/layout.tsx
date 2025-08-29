import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "カレンダーメモアプリ",
  description: "日付ごとにメモを記録できるカレンダーアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className}, antialiased`}
      >
        {children}
        {/* Toaster追加 */}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
