import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أكاديمية تعلم البرمجة - دروس HTML و CSS",
  description: "تعلم HTML و CSS من الصفر مع أمثلة تفاعلية وشروحات مفصلة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
