"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name && !price) {
      alert("Name and price are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, image, price, description }),
      });

      if (res.ok) {
        router.push("/Shop");
      } else {
        throw new Error("Failed to create Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border border-black p-3 ">
        <div className="flex flex-col justify-center m-3">
          <label className="my-2">Product Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter your Product Name"
            className="p-3 border rounded-lg w-fit border-gray-400 my-2"
          />
          <label className="my-2">Product Image</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="/images/1.jpg"
            className="p-3 border rounded-lg w-fit border-gray-400 my-2"
            defaultValue="/images/1.jpg"
          />
          <label className="my-2">Product Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Enter a quick product description"
            className="p-3 border rounded-lg border-gray-400 my-2"
          />
          <label className="my-2">Product Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="Price ex 20000 XAF"
            className="p-3 border rounded-lg w-fit border-gray-400 my-2"
          />
          <button
            type="submit"
            className="p-3 text-white bg-[#17473fec] w-fit my-2 rounded-lg"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
