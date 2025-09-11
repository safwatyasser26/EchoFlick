
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@components/Header";
import Search from "@components/Search";
import { SessionProvider } from "next-auth/react";
import Providers from "./Providers";
import Footer from "@components/Footer";

export const metadata = {
  title: "EchoFlick",
  description: "Best AI Based Movie and Tv shows Recommender",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main_black text-white px-8 pt-16">
        <div className="glossy"></div>
        <Providers>
        <div className="flex flex-col justify-between h-screen">
        <Header />
        <Search />
        <main className="relative">
        {children}
        </main>

        <Footer />
        </div>
       </Providers>
        

      </body>
    </html>
  );
}
