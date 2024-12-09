import "./globals.css";
import Footer from "./components/Footer-component/page";
import Head from "./components/Head-component/page";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="min-h-screen flex flex-col">
        <div  className="sticky top-0 z-50 bg-transparent shadow-md"><Head/></div>
        <div>{children}</div>
        <div><Footer/></div>
      </body>
    </html>
  );
}