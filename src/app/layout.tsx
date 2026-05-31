import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Brazilian Cleaning Services LLC - Sarasota | Immaculate Home Cleaning',
  description: 'Top-rated professional home and office cleaning services in Sarasota, FL. Reliable, honest, and meticulous cleaning by passionate entrepreneurs. Get a free quote today!',
  keywords: ["Brazilian Cleaning Services, Sarasota cleaning, home cleaning, office cleaning, deep cleaning, regular cleaning, move-in move-out cleaning, professional cleaners, Sarasota FL"],
  openGraph: {
    "title": "Brazilian Cleaning Services LLC - Sarasota | Immaculate Home Cleaning",
    "description": "Top-rated professional home and office cleaning services in Sarasota, FL. Reliable, honest, and meticulous cleaning by passionate entrepreneurs. Get a free quote today!",
    "url": "https://www.braziliancleaningservices.com",
    "siteName": "Brazilian Cleaning Services LLC",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/full-view-happy-woman-with-flowers-home_197531-33087.jpg",
        "alt": "Sparkling clean modern kitchen"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Brazilian Cleaning Services LLC - Sarasota | Immaculate Home Cleaning",
    "description": "Top-rated professional home and office cleaning services in Sarasota, FL. Reliable, honest, and meticulous cleaning by passionate entrepreneurs. Get a free quote today!",
    "images": [
      "http://img.b2bpic.net/free-photo/full-view-happy-woman-with-flowers-home_197531-33087.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
