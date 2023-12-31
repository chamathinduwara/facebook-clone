import Header from "./_components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./_components/sidebar/Sidebar";
import RightSidebar from "./_components/rightSidebar/RightSidebar";
import NextAuthSessionProvider from "./_providers/sessionProvider";
import { Providers } from "../redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <Providers>
            <Header></Header>
            <main className="flex bg-gray-100">
              {/* left sidebar */}
              <Sidebar></Sidebar>
              {/* main container */}
              {children}
              {/* right sidebar */}
              <RightSidebar />
            </main>
          </Providers>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
