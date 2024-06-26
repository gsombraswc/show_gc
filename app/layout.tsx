import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import RightPanel from "@/components/RightPanel";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShowGC",
  description: "ShowGC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className}  bg-neutral-950 flex items-start justify-between  '}>
        <div className="fixed top-0 left-0 h-full">
          <Sidebar />
        </div>
        <main className="flex w-full h-full mx-2 ml-[408px]">
          <div className="w-2/3 mx-4">
            <Header />
            {children}
          </div>
          <div className="w-1/3">
            <RightPanel />
          </div>
        </main>
      </body>
    </html>
  );
}


