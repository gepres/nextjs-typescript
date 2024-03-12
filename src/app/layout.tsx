import type { Metadata } from "next";
import "./globals.css";
import { museoSans } from "@/config/myFonts";

 
// Font files can be colocated inside of `pages`
 
export const metadata: Metadata = {
  title: "Izipay",
  description: "Izipay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={museoSans.className}>{children}</body>
    </html>
  );
}
