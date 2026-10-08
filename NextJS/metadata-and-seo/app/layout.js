import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryClientProviderclient from "@/providers/query-client-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learn about Metadata and SEO in Next.js by suraj",
    template: "%s | My App"
  },
  description: "By Hitesh choudhary",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryClientProviderclient>
        {children}
        </QueryClientProviderclient>
        </body>
    </html>
  );
}
