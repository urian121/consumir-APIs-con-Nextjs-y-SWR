import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/style-users.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Consumir APIs con Next.js y SWR",
  description: "Aprender a consumir APIs con Next.js y SWR sin necesidad de hacer usar useEffect o useState. Mejora la experiencia de usuario con SWR.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
