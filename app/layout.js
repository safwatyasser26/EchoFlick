
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "EchoFlick",
  description: "Best AI Based Movie and Tv shows Recommender",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main_black text-white p-8">
        <div className="glossy"></div>
        <main>
        {children}
        </main>

      </body>
    </html>
  );
}
