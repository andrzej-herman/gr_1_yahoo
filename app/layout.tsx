import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SanNews",
  description: "Portal informacyjny studentów grupy 1",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/news-icon.png",
        href: "/news-icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/news-icon.png",
        href: "/news-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
