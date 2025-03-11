import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diary",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darktheme dark:text-white`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
