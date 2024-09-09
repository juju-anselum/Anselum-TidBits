import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./containers";

const blackOpsOne = localFont({
  src: "./assets/fonts/BlackOpsOne.ttf",
  variable: "--font-black-ops-one"
});

const gluten = localFont({
  src: "./assets/fonts/gluten.ttf",
  variable: "--font-gluten"
});

const inter = localFont({
  src: './assets/fonts/inter.ttf',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: "Anselum TidBits",
  description: "Personal Blog app about Tech, Programming, Web Development, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${blackOpsOne.variable} ${gluten.variable} antialiased max-w-screen-2xl mx-auto`}>
        <div className='w-full max-w-[100vw] mx-auto px-5 2xl:px-0'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
