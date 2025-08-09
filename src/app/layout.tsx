import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tyler Fernandes",
  description: "Tyler Fernandes' Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
