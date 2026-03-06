import ClientLayout from "./components/layout/ClientLayout";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import LenisProvider from "./components/providers/LenisProvider";
import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "Astral Logistics | Reliable Logistics & Transportation Solutions",
  description:
    "Astral Logistics is committed to delivering dependable logistics solutions through efficient operations, transparent communication, and a strong focus on reliability and customer trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased font-medium`}>
        <LenisProvider>
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
