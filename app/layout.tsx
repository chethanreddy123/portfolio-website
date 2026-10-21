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
  title: "Chethan Reddy — FDE, Agentic AI & Enterprise AI Systems",
  description:
    "Chethan Reddy, FDE-2 at Staple AI. Agentic workflows, multimodal AI, RAG and LLM evaluation, with engineering delivery for 20+ enterprise customers. Remote from India.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Chethan Reddy — FDE-2, Agentic AI & Enterprise AI Systems",
    description: "Explore agentic workflows, multimodal AI, model evaluation and enterprise delivery. Remote from India.",
    siteName: "Chethan Reddy",
    images: [
      {
        url: "social-card.png",
        width: 1200,
        height: 630,
        alt: "Chethan Reddy — FDE-2, Agentic AI & Enterprise AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chethan Reddy — FDE-2, Agentic AI & Enterprise AI Systems",
    images: ["social-card.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg` },
};
export const viewport: Viewport = { themeColor: "#f6f5f0" };
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
              jobTitle: "Forward Deployed Engineer (FDE-2)",
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
