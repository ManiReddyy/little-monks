import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/global/SmoothScroll";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Little Monks Pre School",
  description: "A nurturing Montessori preschool in Bolarum where every child is loved, guided, and inspired.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${baloo.variable} ${poppins.variable} font-body antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-orange-50/40">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
