import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Navbar } from "./containers";

const blackOpsOne = localFont({
  src: "./assets/fonts/BlackOpsOne.ttf",
  variable: "--font-black-ops-one"
});

const gluten = localFont({
  src: "./assets/fonts/Gluten.ttf",
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
        <div className='w-full max-w-[100vw] min-h-screen overflow-x-hidden flex flex-col justify-start items-center'>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
