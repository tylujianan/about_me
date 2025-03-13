import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DiaryDetail",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-[5%] w-full h-full flex justify-center items-center">
        {children}
    </div>
  );
}
