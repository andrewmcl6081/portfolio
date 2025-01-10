import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata = {
  title: "Andrew McLaughlin | Software Engineer",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
