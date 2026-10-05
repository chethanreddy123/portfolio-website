import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const siteUrl = "https://chethanreddy123.github.io/portfolio-website/";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chethan Reddy — AI Forward Deployed Engineer",
  description:
    "Chethan Reddy, AI Forward Deployed Engineer at Staple AI. AI applications, backend systems, product engineering and delivery across 20+ enterprise customers.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Chethan Reddy — AI Forward Deployed Engineer",
    description: "AI applications, backend systems and product delivery.",
    siteName: "Chethan Reddy",
    images: [
      {
        url: "social-card.png",
        width: 1200,
        height: 630,
        alt: "Chethan Reddy — AI Forward Deployed Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chethan Reddy — AI Forward Deployed Engineer",
    images: ["social-card.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg` },
};
export const viewport: Viewport = { themeColor: "#f5f3ed" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${space.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chethan Reddy",
              url: siteUrl,
              jobTitle: "AI Forward Deployed Engineer",
              worksFor: { "@type": "Organization", name: "Staple AI" },
              sameAs: [
                "https://github.com/chethanreddy123",
                "https://www.linkedin.com/in/achethanreddy/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
