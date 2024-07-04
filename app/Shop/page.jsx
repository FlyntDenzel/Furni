import Image from "next/image";
import React from "react";

const ShopPage = () => {
  return (
    <div className="px-14 my-14">
      <section className="grid grid-cols-4 gap-3">
        <div className="bg-gray-200 rounded-lg w-fit">
          <Image
            src={`/assets/product-1.png`}
            height={200}
            width={200}
            alt="product 1"
            className="w-fit "
          />
          <div className="text-center text-gray-800">
            <h1>Nordic Chair</h1>
            <p className="font-bold">10 000 XAF</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg w-fit">
          <Image
            src={`/assets/product-2.png`}
            height={200}
            width={200}
            alt="product 1"
            className="w-fit "
          />
          <div className="text-center text-gray-800">
            <h1>Nordic Chair</h1>
            <p className="font-bold">10 000 XAF</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg w-fit">
          <Image
            src={`/assets/product-3.png`}
            height={200}
            width={200}
            alt="product 1"
            className="w-fit "
          />
          <div className="text-center text-gray-800">
            <h1>Nordic Chair</h1>
            <p className="font-bold">10 000 XAF</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg w-fit">
          <Image
            src={`/assets/product-1.png`}
            height={200}
            width={200}
            alt="product 1"
            className="w-fit "
          />
          <div className="text-center text-gray-800">
            <h1>Nordic Chair</h1>
            <p className="font-bold">10 000 XAF</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg w-fit">
          <Image
            src={`/assets/product-2.png`}
            height={200}
            width={200}
            alt="product 1"
            className="w-fit "
          />
          <div className="text-center text-gray-800">
            <h1>Nordic Chair</h1>
            <p className="font-bold">10 000 XAF</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
