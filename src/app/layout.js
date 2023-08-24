'use client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/app/components/navbar";
import { useEffect } from "react";
import Footer from './components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Show users of JSON file",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <html lang="es">
      <body className="bg-dark text-light">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
