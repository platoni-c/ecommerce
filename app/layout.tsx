import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { CartProvider } from "@/app/context/CartContext";
import Notice from "@/app/components/Notice";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Samuel's",
  description: "Online Shopping Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <CartProvider>
          {/* Full-width sticky notice at the very top */}
          <Notice />

          {/* Constrained site content */}
          <div className="max-w-7xl mx-auto">
            <NavBar />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
