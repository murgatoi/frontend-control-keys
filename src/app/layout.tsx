import type { Metadata } from "next";

import '../css/global.css';

export const metadata: Metadata = {
  title: "Control Keys",
  description: "Gerenciador de chaves",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}