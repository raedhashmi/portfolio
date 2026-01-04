import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raed | Developer Portfolio",
  description: "Full-stack developer focused on infrastructure, automation, and web systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0e14] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
