import "./globals.css";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import Provider from "./provider";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Folasade Adu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='luxury'>
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
