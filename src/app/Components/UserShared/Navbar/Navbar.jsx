import React from "react";
import { cormorant, open_sans } from "@/fonts/fonts";
import mainLogo from "@/assests/icons/nextlaw_logo-removebg-preview.png";
import clockLogo from "@/assests/icons/clock.png";
import headphoneLogo from "@/assests/icons/headphones.png";
import menuLogo from "@/assests/icons/menu icon.png";
import Image from "next/image";

const navli =[

    {
        path: "/",
        name: ""
    },
]

const Navbar = () => {
  return (
    <nav className="bg-[#124547] text-white ">
       <main className={` ${cormorant.className} ${open_sans.className} lg:max-w-6xl mx-auto border`}>
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<< NAVBAR FOR LARGE & MEDIUM DEVICE >>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <section >
        {/* logo & contact div -------------------------------- */}
        <div className="flex justify-between items-center">
        <div>
          <Image src={mainLogo} alt="main logo" className=" w-34" />
        </div>
        <div className=" flex items-center gap-4">
          <div className="border-r border-gray-400 pr-4">
            <div className="flex justify-between items-center  mb-2 ">
              <Image src={clockLogo} alt="main logo" className="w-8" />
              <h1 className="text-2xl">8:00 - 19:00</h1>
            </div>
            <div>
              <p className="text-sm">Our Opening Hours Mon - Fri</p>
            </div>
          </div>
          <div className="border-r border-gray-400 pr-4">
            <div className="flex justify-between items-center gap-3 mb-2">
              <Image src={headphoneLogo} alt="main logo" className="w-8" />
              <h1 className=""> +880 135 698 4125</h1>
            </div>
            <div>
              <p className="text-sm">Call Us For Free Consultation</p>
            </div>
          </div>
        </div>
        {/* nav ul div  -------------------------------- */}
<div>

</div>
        </div>
      </section>
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<< NAVBAR FOR SMALL DEVICE >>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <section></section>
       </main>
    </nav>
  );
};

export default Navbar;
