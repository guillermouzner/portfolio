import {Inter} from "next/font/google";

import "@/styles/globals.css";
import {cn} from "@/lib/utils";
import {TailwindIndicator} from "@/components/tailwind-indicator";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={cn("min-h-screen bg-black font-sans antialiased", inter.variable)}>
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
