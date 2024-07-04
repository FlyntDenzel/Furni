import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-14 my-10 ">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="flex items-center gap-2 font-bold my-3">
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_80_40)">
                  <path
                    d="M22.9375 4.5H5.0625C3.90234 4.5 3 5.44531 3 6.5625V18.9375C3 20.0977 3.90234 21 5.0625 21H22.9375C24.0547 21 25 20.0977 25 18.9375V6.5625C25 5.44531 24.0547 4.5 22.9375 4.5ZM22.9375 6.5625V8.32422C21.9492 9.14062 20.4023 10.3438 17.1367 12.9219C16.4062 13.4805 14.9883 14.8555 14 14.8125C12.9688 14.8555 11.5508 13.4805 10.8203 12.9219C7.55469 10.3438 6.00781 9.14062 5.0625 8.32422V6.5625H22.9375ZM5.0625 18.9375V10.9883C6.00781 11.7617 7.42578 12.8789 9.53125 14.5547C10.4766 15.2852 12.1523 16.918 14 16.875C15.8047 16.918 17.4375 15.2852 18.4258 14.5547C20.5312 12.8789 21.9492 11.7617 22.9375 10.9883V18.9375H5.0625Z"
                    fill="#C4C4C4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_80_40">
                    <rect width="28" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Subscribe to Our NewsLetter
            </h1>
            <div className="flex gap-3">
              <input
                type="text"
                className="border p-3 rounded-md"
                placeholder="Enter your name"
              />
              <input
                type="text"
                className="border p-3 rounded-md"
                placeholder="Enter your email"
              />
              <button className="bg-[#17473fec] p-5 w-fit rounded-lg text-white">
                <FaPaperPlane />
              </button>
            </div>
          </div>
          <Image
            src={`/assets/sofa.png`}
            width={350}
            height={350}
            alt="sofa"
            className="w-fit"
          />
        </div>
        <section className="flex">
          <h1>
            <p className="font-bold my-3 text-3xl text-[#17473fec] ">
              Furni. <br />
            </p>
            <span className="text-gray-400">
              Donec facilisis quam ut purus rutrum lobortis. <br /> Donec vitae
              odio quis nisl dapibus malesuada. <br /> Nullam ac aliquet velit.{" "}
              <br /> Aliquam vulputate velit imperdiet dolor tempor tristique.
              Pellentesque <br />
              habitant
            </span>
            <div className="flex  items-center gap-3 self-start text-[#17473fec] my-3">
              <FaTwitter
                className="border rounded-full w-fit p-3 bg-gray-300 cursor-pointer social-hover"
                size={40}
              />
              <FaInstagram
                className="border rounded-full w-fit p-3 bg-gray-300 cursor-pointer social-hover"
                size={40}
              />
              <FaLinkedin
                className="border rounded-full w-fit p-3  bg-gray-300 cursor-pointer social-hover"
                size={40}
              />
              <FaFacebook
                className="border rounded-full w-fit p-3  bg-gray-300 cursor-pointer social-hover"
                size={40}
              />
            </div>
          </h1>
        </section>
      </div>
      <div className="flex justify-between items-center my-3 text-gray-400">
        <h1>Copyright ©2024. All Rights Reserved. — Designed with love by FlyntDenzel</h1>
        <p className="flex gap-3">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
