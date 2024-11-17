import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav/nav"
import Footer from "../components/Footer/footer"

export const metadata: Metadata = {
  title: "Verde Vias",
  description: "Site informativo sobre veiculos que utilizam energia sustentavel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
