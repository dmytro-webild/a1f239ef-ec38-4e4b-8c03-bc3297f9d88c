import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'The 716 Cafe & Restaurant | Cozy Dining & Coffee',
  description: 'Experience the warm, upscale-casual ambiance of The 716 Cafe & Restaurant / Café Resto Le 716. Serving delicious breakfast, lunch, and dinner with exquisite coffee in a charming neighborhood setting.',
  keywords: ["716 Cafe, 716 Restaurant, Café Resto Le 716, cozy cafe, upscale casual dining, breakfast, lunch, dinner, coffee, bistro, French cuisine, Canadian cuisine, local restaurant, neighborhood gem, Montreal, Quebec"],
  openGraph: {
    "title": "The 716 Cafe & Restaurant | Cozy Dining & Coffee",
    "description": "Experience the warm, upscale-casual ambiance of The 716 Cafe & Restaurant / Café Resto Le 716. Serving delicious breakfast, lunch, and dinner with exquisite coffee in a charming neighborhood setting.",
    "url": "https://www.the716cafe.com",
    "siteName": "The 716 Cafe & Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/barista-making-cappuccino_1150-8043.jpg",
        "alt": "Dark cafe interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "The 716 Cafe & Restaurant | Cozy Dining & Coffee",
    "description": "Experience the warm, upscale-casual ambiance of The 716 Cafe & Restaurant / Café Resto Le 716.",
    "images": [
      "http://img.b2bpic.net/free-photo/barista-making-cappuccino_1150-8043.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
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
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
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
