import { Pattaya } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation";

const pattaya = Pattaya({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pattaya",
});

export const metadata = {
  title: "GUGU",
  description: "GUGU is The best app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pattaya.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}