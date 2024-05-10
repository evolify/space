import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "My Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html>
    <head>
      <script src="//at.alicdn.com/t/c/font_348859_69fxtkl7fo9.js" />
    </head>
    <body>{children}</body>
  </html>
  )
}
