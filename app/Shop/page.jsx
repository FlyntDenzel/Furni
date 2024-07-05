import Image from "next/image";
import React from "react";

const ShopPage = async () => {

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

  const { products } = await getProducts();

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
      <div className="w-full grid grid-cols-3">
        {products.map((product) => (
          <div className=" border rounded-md p-3 m-3" key={product._id}>
            <Image
              src={product.image}
              width={100}
              height={100}
              alt={product.image}
              className="w-full rounded-md"
            />
            <div className="flex justify-between gap-3 font-bold">
              <h1>{product.name}</h1>
              <h1>{product.price} XAF</h1>
            </div>
            <h1 className="text-center">{product.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
