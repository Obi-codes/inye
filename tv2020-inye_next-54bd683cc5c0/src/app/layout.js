import "../../styles/globals.css";
import "../../styles/fonts.css";

export const metadata = {
  title: "INYE",
  description: "Invest, Nurture, Yeild Equity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
