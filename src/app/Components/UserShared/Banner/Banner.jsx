import React from "react";
import bannerImage1 from "@/assests/images/banner-img-1.jpg";
import bannerImage2 from "@/assests/images/banner-img-2.jpg";
import bannerImage3 from "@/assests/images/banner-img-3.jpg";
import Image from "next/image";
import { cormorant, open_sans } from "@/fonts/fonts";

const bannarData = [
  {
    image: bannerImage1,
    title: "Client Focused",
    disc: "The best law practices & services for all your legal needs",
  },
  {
    image: bannerImage2,
    title: "Law Expertise",
    disc: "The best law practices & services for all your legal needs",
  },
  {
    image: bannerImage3,
    title: "Justice Oriented",
    disc: "The best law practices & services for all your legal needs",
  },
];

const Banner = () => {
  return (
    <div className={` ${open_sans.className} `}>
      <div className="relative">
        <Image
          src={bannerImage1}
          alt="bannar image"
          className="ralative w-full h-[600px] object-cover"
        />
        <div className="w-full bg-black absolute inset-0 opacity-30" />
        <div className="absolute  inset-0 flex justify-center items-center text-center">
          <div>
            <h1 className={` ${cormorant.className} text-9xl font-semibold `}>
              Client Focused
            </h1>
            <p className="mt-4 text-lg font-semibold">
              The best law practices & services for all your legal needs
            </p>
            <div className="flex justify-center mt-5">
              <button className="md:block sm: hidden uppercase text-sm font-semibold bg-white text-black hover:bg-[#238487] hover:text-white py-4 px-14">
                Free Evaluation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
