import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import "@/assets/styles/scss/main.scss";
import { museoSans } from "@/config";
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
