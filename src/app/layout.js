"use client";
import "../../styles/globals.css";
import "../../styles/fonts.css";
import NavBar from "@/components/NavBarComponent/NavBar";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "INYE",
//   description: "Invest, Nurture, Yeild Equity",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const pathArray = ["/createproject", "/signup"];

  return (
    <html lang="en">
      <body>
        {pathArray.includes(pathname) ? null : <NavBar />}
        <main>{children}</main>
      </body>
    </html>
  );
}
