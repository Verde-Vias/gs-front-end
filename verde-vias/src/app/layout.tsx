import type { Metadata } from "next";
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
      <body>
        {children}
      </body>
    </html>
  );
}
