import Image from "next/image";
import Link from "next/link";
import React from "react";

const Choose = () => {
  return (
    <div className="my-32">
      {/* Desktop Navigation */}
      <div className="flex justify-between items-center gap-3">
        {/* Text div */}
        <div>
          <h1 className="flex flex-col gap-4">
            <span className="font-bold text-3xl">Why Choose Us</span>
            <p className="text-gray-400">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam <br />
              vulputate velit imperdiet dolor tempor tristique.
            </p>
          </h1>
          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-5"
              >
                <path
                  d="M31.6591 35.3637C33.6046 35.3637 35.1818 33.7865 35.1818 31.841C35.1818 29.8954 33.6046 28.3182 31.6591 28.3182C29.7135 28.3182 28.1364 29.8954 28.1364 31.841C28.1364 33.7865 29.7135 35.3637 31.6591 35.3637Z"
                  stroke="black"
                  stroke-width="2.81818"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3409 35.3637C15.2865 35.3637 16.8636 33.7865 16.8636 31.841C16.8636 29.8954 15.2865 28.3182 13.3409 28.3182C11.3954 28.3182 9.81818 29.8954 9.81818 31.841C9.81818 33.7865 11.3954 35.3637 13.3409 35.3637Z"
                  stroke="black"
                  stroke-width="2.81818"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.1364 17.0454H33.7727L38 21.2727V28.3181H28.1364V17.0454Z"
                  stroke="black"
                  stroke-width="2.81818"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.1364 10H7V28.3182H28.1364V10Z"
                  stroke="black"
                  stroke-width="2.81818"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1 className="mb-5">
                Fast & Free Shipping <br /> <br />
                <span className="text-gray-400 ">
                  Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac
                  aliquet velit. <br /> Aliquam vulputate.
                </span>
              </h1>
            </div>
            <div className="">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-5"
              >
                <path
                  d="M14.2 9L10 14.6V34.2C10 34.9426 10.295 35.6548 10.8201 36.1799C11.3452 36.705 12.0574 37 12.8 37H32.4C33.1426 37 33.8548 36.705 34.3799 36.1799C34.905 35.6548 35.2 34.9426 35.2 34.2V14.6L31 9H14.2Z"
                  stroke="black"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.2 20.2C28.2 21.6852 27.61 23.1095 26.5598 24.1597C25.5096 25.21 24.0852 25.8 22.6 25.8C21.1148 25.8 19.6904 25.21 18.6402 24.1597C17.59 23.1095 17 21.6852 17 20.2"
                  stroke="black"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14.6H35.2"
                  stroke="black"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1 className="mb-5">
                Easy to Shop <br /> <br />
                <span className="text-gray-400 ">
                  Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac
                  aliquet velit. <br /> Aliquam vulputate.
                </span>
              </h1>
            </div>
            <div className="">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-3"
              >
                <path
                  d="M22.5 37C29.9558 37 36 30.9558 36 23.5C36 16.0442 29.9558 10 22.5 10C15.0442 10 9 16.0442 9 23.5C9 30.9558 15.0442 37 22.5 37Z"
                  stroke="black"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.5 28.9C25.4823 28.9 27.9 26.4823 27.9 23.5C27.9 20.5176 25.4823 18.1 22.5 18.1C19.5177 18.1 17.1 20.5176 17.1 23.5C17.1 26.4823 19.5177 28.9 22.5 28.9Z"
                  stroke="black"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.3205 27.3204L32.0445 33.0444"
                  stroke="black"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9555 33.0444L18.6795 27.3204"
                  stroke="black"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.3205 19.6796L32.0445 13.9556"
                  stroke="black"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.3205 19.6796L31.086 14.9141"
                  stroke="black"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9555 13.9556L18.6795 19.6796"
                  stroke="black"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1 className="mb-5">
                24/7 Support <br /> <br />
                <span className="text-gray-400 ">
                  Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac
                  aliquet velit. <br /> Aliquam vulputate.
                </span>
              </h1>
            </div>
            <div className="">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-3"
              >
                <path
                  d="M16.3333 37.3333L11 32L16.3333 26.6666"
                  stroke="black"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 23.9999V26.6665C35 28.081 34.4381 29.4376 33.4379 30.4378C32.4377 31.438 31.0812 31.9999 29.6667 31.9999H11"
                  stroke="black"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.6667 7.99988L35 13.3332L29.6667 18.6665"
                  stroke="black"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 21.3333V18.6666C11 17.2521 11.5619 15.8955 12.5621 14.8953C13.5623 13.8952 14.9188 13.3333 16.3333 13.3333H35"
                  stroke="black"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1 className="mb-5">
                Hassle Free Returns <br /> <br />
                <span className="text-gray-400 ">
                  Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac
                  aliquet velit. <br /> Aliquam vulputate.
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* Image div */}
        <div className="flex">
          <svg
            width="305"
            height="217"
            viewBox="0 0 255 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="3.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="33.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="63.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="93.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="123.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="153.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="183.5" r="3.5" fill="#F9BF29" />
            <circle cx="3.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="34.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="65.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="96.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="127.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="158.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="189.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="220.5" cy="213.5" r="3.5" fill="#F9BF29" />
            <circle cx="251.5" cy="213.5" r="3.5" fill="#F9BF29" />
          </svg>
          <Image
            src={`/assets/why-choose-us-img.jpg`}
            width={300}
            height={300}
            alt="background-2"
            className="w-full rounded-xl relative top-20 -left-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
