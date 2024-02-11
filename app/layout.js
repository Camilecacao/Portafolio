import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Appnavbar from "@/components/Appnavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio",
  description: "Escribir descripción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Appnavbar/>
           {children}
        </Provider>
        </body>
    </html>
  );
}
