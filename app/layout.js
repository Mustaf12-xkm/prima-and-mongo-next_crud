import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "./components/navbar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl ">
      
            <Navbar />
      
          {children}
        </div>
      </body>
    </html>
  );
}
