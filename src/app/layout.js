import { Inter } from "next/font/google";
import "./globals.css";
// import Nav from "@/components/navbar/Nav";
import Nav from '@/components/navbar/Nav';
import Slide from "@/components/navbar/slide";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
               
                <Slide/>
                <Nav/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
