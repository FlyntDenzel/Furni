import Image from "next/image";
import Link from "next/link";
import React from "react";
import Choose from "../components/Choose";

const HomePage = () => {
  return (
    <div className="px-14 my-14">
      <div className="flex justify-between items-center gap-5 my-20">
        <div className="flex flex-col">
          <h1 className=" text-4xl my-3">
            Crafted with <br />
            excellent <br /> material
          </h1>
          <p className="my-3">
            Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac
            aliquet velit. <br />
            Aliquam vulputate velit imperdiet dolor <br /> tempor tristique.
          </p>
          <Link
            href={`/Shop`}
            className="button bg-gray-700 text-white w-fit px-4 my-3"
          >
            Explore
          </Link>
        </div>
        <div className="relative w-64 h-64 bg-gray-200 overflow-hidden hover-slide-up rounded-lg">
          <Image
            src={`/assets/product-1.png`}
            height={200}
            width={200}
            alt="product 1"
            className="w-fit image-container"
          />
          <div className="text-center text-gray-800">
            <h1>Nordic Chair</h1>
            <p className="font-bold">10 000 XAF</p>
          </div>
        </div>
        <div className="relative w-64 h-64 bg-gray-200 overflow-hidden hover-slide-up rounded-lg">
          <Image
            src={`/assets/product-2.png`}
            height={200}
            width={200}
            alt="product 1"
            className="w-fit image-container"
          />
          <div className="text-center">
            <h1>Nordic Chair</h1>
            <p className="font-bold">10 000 XAF</p>
          </div>
        </div>
        <div className="relative w-64 h-64 bg-gray-200 overflow-hidden hover-slide-up rounded-lg">
          <Image
            src={`/assets/product-3.png`}
            height={200}
            width={200}
            alt="product 1"
            className="w-fit image-container"
          />
          <div className="text-center">
            <h1>Nordic Chair</h1>
            <p className="font-bold">10 000 XAF</p>
          </div>
        </div>
      </div>
      <Choose />
    </div>
  );
};

export default HomePage;
