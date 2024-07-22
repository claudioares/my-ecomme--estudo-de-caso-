import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import ContextProvider from "@/data/contextapi/context.api";
import { Container } from "@/components/template/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My-ecommerce",
  description: "Estudo de caso para criação de ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ContextProvider>
        <Header />
        <Container  styles={""}>
          {children}
        </Container>
        </ContextProvider>
      </body>
    </html>
  );
}
