import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Bhavana H — Portfolio",
  description:
    "Portfolio of Bhavana H, Computer Science & Business Systems (CSBS) student at Easwari Engineering College. Passionate about software engineering, business analysis, and data analytics.",
  keywords: [
    "Bhavana H",
    "Bhavana Hariharan",
    "CSBS",
    "Software Engineer",
    "Business Analyst",
    "Data Analyst",
    "Easwari Engineering College",
    "Portfolio",
  ],
  authors: [{ name: "Bhavana H" }],
  openGraph: {
    title: "Bhavana H — Portfolio",
    description: "CSBS Student & Aspiring Software/Business/Data Analyst",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavana H — Portfolio",
    description: "CSBS Student & Aspiring Software/Business/Data Analyst",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="noise antialiased bg-background text-text-primary font-body">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0d1117",
              color: "#e6edf3",
              border: "1px solid #21262d",
              borderRadius: "12px",
              fontFamily: "'DM Sans', sans-serif",
            },
            success: {
              iconTheme: { primary: "#4f9cf9", secondary: "#050810" },
            },
            error: {
              iconTheme: { primary: "#f87171", secondary: "#050810" },
            },
          }}
        />
      </body>
    </html>
  );
}
