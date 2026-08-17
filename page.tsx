import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Торговый дом «Электрика»",
  description: "Электротовары для дома и бизнеса. Помощь в подборе оборудования, освещения, розеток и выключателей.",
  keywords: ["магазин электрики", "электротовары", "освещение", "розетки", "выключатели", "автоматика"],
  openGraph: {
    title: "Торговый дом «Электрика»",
    description: "Проверенные электротовары и помощь в выборе.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = { themeColor: "#0d0e0e", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
