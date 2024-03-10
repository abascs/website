import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: " المبرمج عباس فاضل",
  description: "web programming and generate ui for ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={cairo.className}>
        <div className="mx-auto container w-full">
          <Header/>
          {children}
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
