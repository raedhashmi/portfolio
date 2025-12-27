import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lrDevstudio",
  description: "The studio of devs by devs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
