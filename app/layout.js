import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./component/Header";
import { useContext } from "react";
import { AppContext, AppProvider } from "./context/context";
import Sidebar from "./component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
        <Toaster />
          <Header />
          <Sidebar/>
          <div className="w-full max-h-[99vh]">
          {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
