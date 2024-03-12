import type { Metadata } from "next";
import "./globals.css";
import { museoSans } from "@/config/myFonts";
import StoreProvider from "@/store/Providers";

 
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
      <body className={museoSans.className}>
        <StoreProvider>
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
