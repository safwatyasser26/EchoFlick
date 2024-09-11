import './global.css';

export const metadata = {
  title: "EchoFlick",
  description: "The Best Movie Recommendation System Using AI",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}