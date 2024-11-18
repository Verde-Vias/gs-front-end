import type { Metadata } from "next";
import Footer from "../components/Footer/footer";
import Nav from "../components/Nav/nav";
import "./globals.css";

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
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
