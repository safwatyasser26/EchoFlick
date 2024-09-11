import "./globals.css";

export const metadata = {
  title: "EchoFlick",
  description: "Best AI Based Movie and Tv shows Recommender",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
