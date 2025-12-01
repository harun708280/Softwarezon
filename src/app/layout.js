import { Rubik } from "next/font/google";
import "./globals.css";
import UpperHeaderWrapper from "@/components/Wrapper/UpperHeaderWrapper";
import NavWrapper from "@/components/Wrapper/NavWrapper";
import FooterWrapper from "@/components/Wrapper/FooterWrapper";
import AOSWrapper from "@/components/shared/SlideInText/AOSWrapper";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Softwarezon - Your Trusted Software Development Partner",
  description: "Softwarezon provides premium software solutions, trading signals, web apps, and more.",
  keywords: "software development, trading signals, web apps, PHP scripts, Laravel, Next.js",
  authors: [{ name: "Softwarezon", url: "https://softwarezon.com" }],
  icons: {
    icon: "/images/logo.svg",
  },
  openGraph: {
    title: "Softwarezon - Your Trusted Software Development Partner",
    description: "Softwarezon provides premium software solutions, trading signals, web apps, and more.",
    url: "https://softwarezon.com",
    siteName: "Softwarezon",
    images: [
      {
        url: "/images/main-web.png",
        width: 1200,
        height: 630,
        alt: "Softwarezon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softwarezon - Your Trusted Software Development Partner",
    description: "Softwarezon provides premium software solutions, trading signals, web apps, and more.",
    images: ["/images/main-web.png"],
  },
  alternates: {
    canonical: "https://softwarezon.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="flex flex-col min-h-screen bg-white">
          <UpperHeaderWrapper />
          <NavWrapper />
          <AOSWrapper />
          <main className="flex-grow">{children}</main>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
