import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Humidity Solutions | Commercial & Industrial Dehumidification Systems",
  description:
    "Engineered dehumidification and humidity-control solutions designed for commercial, industrial, and specialized environments. Protecting assets, operations, and indoor climate.",
  keywords: [
    "Commercial Dehumidifiers",
    "Industrial Dehumidification",
    "Ceiling Mounted Dehumidifiers",
    "Humidity Control Solutions",
    "Warehouse Moisture Protection",
    "Cleanroom Climate Control",
  ],
  authors: [{ name: "Humidity Solutions" }],
  openGraph: {
    title: "Humidity Solutions | Engineered Dehumidification Systems",
    description:
      "Control humidity. Protect your space. Specialized dehumidification equipment for commercial, industrial, and institutional spaces.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#111111] selection:text-white">
        {children}
      </body>
    </html>
  );
}
