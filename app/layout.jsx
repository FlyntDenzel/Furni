import Image from "next/image";
import Nav from "./components/Nav";
import "./globals.css";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata = {
  title: "Furni",
  description: "An ecommerce app generated with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div
          className="bg-cover bg-center h-screen bg-[#17473fec] p-14"
          // class="bg-cover bg-center h-screen"
          // style={{ backgroundImage: "url('/assets/couch.png');" }}
        >
          <Nav />
          <div className="flex items-center">
            <h1 className="flex flex-col">
              <span className="font-bold text-white text-5xl my-5">
                Modern Interior <br /> Design Studio
              </span>
              <p className="text-gray-400 my-5">
                LDonec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <div className="my-5 flex gap-5 font-bold">
                <Link href={`/Shop`} className="button bg-yellow-400 border-yellow-400">Shop Now</Link>
                <Link href={`/`} className="button  border-gray-400 text-white hover: border-2 hover:border-white">Explore</Link>
              </div>
            </h1>
            <Image
              src={`/assets/couch.png`}
              width={1000}
              height={1000}
              alt="background image"
              className="w-full"
            />
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
