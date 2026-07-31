import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PAKHIMS — The Smarter Way to Run Your Hospital",
  description:
    "PAKHIMS is a complete digital platform for hospital operations, managing OPD, IPD, Blood Bank, Patient History, Billing, Employees, Accounts, and Insurance in one connected system.",
  keywords: [
    "PAKHIMS",
    "Hospital Management System",
    "HMS Pakistan",
    "Hospital Software",
    "OPD Management",
    "IPD Management",
    "Blood Bank Software",
    "Hospital Billing Software",
    "Medical Records System",
  ],
  authors: [{ name: "PAKHIMS Team" }],
  openGraph: {
    title: "PAKHIMS — Hospital Management System",
    description:
      "One connected digital platform to streamline your hospital's OPD, IPD, Blood Bank, Accounts, and Billing.",
    url: "https://pakhims.com",
    siteName: "PAKHIMS Marketing Showcase",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAKHIMS — Hospital Management System",
    description:
      "Transform hospital administration with PAKHIMS. Connected OPD, IPD, Blood Bank, Accounts & Invoicing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${poppins.variable}`}>
      <body className="bg-white text-slate-900 antialiased selection:bg-[#CE2433] selection:text-white font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
