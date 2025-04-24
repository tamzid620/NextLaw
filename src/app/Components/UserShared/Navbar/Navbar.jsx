'use client' ;
import React, { useEffect, useRef, useState } from "react";
import { cormorant, open_sans } from "@/fonts/fonts";
import Image from "next/image";
import mainLogo from "@/assests/icons/nextlaw_logo-removebg-preview.png";
import clockLogo from "@/assests/icons/clock (2).png";
import headphoneLogo from "@/assests/icons/headphones-with-microphone.png";
import menuLogo from "@/assests/icons/menu icon.png";
import socialmedia1 from "@/assests/icons/facebook.png";
import socialmedia2 from "@/assests/icons/instagram.png";
import socialmedia3 from "@/assests/icons/linkedin.png";

const navli =[

    {
        path: "/",
        name: ""
    },
]

const Navbar = () => {

  const sidebarRef = useRef(null);
  const [viewSidebar, setViewSidebar] = useState(false);

  const toggleSidebar = () => {
    setViewSidebar(!viewSidebar);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setViewSidebar(false);
      }
    };

    if (viewSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [viewSidebar]);

  return (
    <nav className="bg-[#124547] text-white relative  z-10">
       <main className={` ${cormorant.className} ${open_sans.className} lg:max-w-6xl mx-auto `}>
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<< NAVBAR FOR LARGE & MEDIUM DEVICE >>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <section>
        {/* logo & contact div -------------------------------- */}
        <div className="flex justify-between items-center">
          {/* logo section  */}
        <div>
          <Image src={mainLogo} alt="main logo" className=" w-34" />
        </div>
        {/* contact section  */}
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
          <div className=" pr-4">
          <Image
           onClick={toggleSidebar}
           src={menuLogo} 
           alt="main logo" 
           className="w-8 hover:shadow-black shadow-lg" />
          </div>
        </div>
        
        </div>
        {/* ul li div  */}
      </section>
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<< NAVBAR FOR SMALL DEVICE >>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <section></section>
       </main>
        {/* SideBar-------------------------------------------- */}
      <aside
      ref={sidebarRef}
        className={` fixed top-0 left-0 h-full bg-[#124547] w-[350px] shadow-md shadow-[#98664A] transform transition-transform duration-300 ease-in-out ${
          viewSidebar ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {viewSidebar ? (
          <div className="  w-[350px] shadow-md h-screen z-10 transition ease-in duration-700 flex px-6 justify-center mt-10">
            <div>
            {/* logo section  */}
        <div>
          <Image src={mainLogo} alt="main logo" className=" w-48" />
        </div>
        {/* social media link section  */}
        <div className="text-center mt-10">
          <h1 className={` ${cormorant.className} text-2xl `}>Follow Us</h1>
          <div className="flex justify-center gap-5 mt-4">
          <Image src={socialmedia1} alt="social media logo" className=" w-5" />
          <Image src={socialmedia2} alt="social media logo" className=" w-5" />
          <Image src={socialmedia3} alt="social media logo" className=" w-5" />

          </div>
        </div>
        <div className="absolute bottom-32 left-12">
          <button className="uppercase text-sm font-semibold bg-white text-black hover:bg-[#238487] hover:text-white p-4">Request Free Consultation</button>
        </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </aside>
    </nav>
  );
};

export default Navbar;
