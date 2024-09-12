import "./globals.css";
import Header from '@components/Header';
import SearchBox from '@components/SearchBox';
export const metadata = {
  title: "EchoFlick",
  description: "Best AI Based Movie and Tv shows Recommender",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main_black text-white p-8">
        <Header />
        <SearchBox />
        <div className="glossy"></div>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
