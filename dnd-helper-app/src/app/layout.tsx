import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D&D 5.5 Helper",
  description: "A comprehensive helper for D&D 5.5 players.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <header className="bg-gray-800 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">D&D 5.5 Helper</h1>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/notes" className="hover:text-gray-300">
                  Notas
                </a>
              </li>
              <li>
                <a href="/character-creation" className="hover:text-gray-300">
                  Creación de Personajes
                </a>
              </li>
              <li>
                <a href="/game-aids" className="hover:text-gray-300">
                  Ayudas de Juego
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="grow container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <p>&copy; {new Date().getFullYear()} D&D 5.5 Helper. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
