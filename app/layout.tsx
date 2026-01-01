import { Providers } from "./providers"
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google"
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "Denzel Ikebudu",
  description: "My Portfolio",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-inter bg-white text-black dark:bg-black dark:text-white`}>
        <Providers>
          {children}
          <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
          }}
        />
        </Providers>
      </body>
    </html>
  );
}
