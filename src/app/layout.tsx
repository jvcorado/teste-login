import type { Metadata, Viewport } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="application-name" content="Simpplify" />
        <meta
          name="description"
          content="Simpplify - Sua ferramenta para simplificar processos."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="canonical" href="https://app.simpplify.com.br/" />
        <title>Simpplify</title>
      </head>
      <body>
        <NextThemesProvider attribute="class" defaultTheme="light">
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
