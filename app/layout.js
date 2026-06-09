import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "Eslavath Uday | Full Stack Developer",
  description: "My Personal Info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 dark:bg-darkTheme dark:text-white `}><Toaster position="top-right"
        containerStyle={{
          top: "80px",   // adjust based on navbar height
          right: "20px"
        }}

        toastOptions={{
          className: "animate-[slideInRight_0.4s_ease]",
          style: {
            background: "#2563eb",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
          },

        }} />{children}</body>
    </html>
  );
}
