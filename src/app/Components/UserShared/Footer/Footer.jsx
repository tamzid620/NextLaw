import React from "react";
import Image from "next/image";
import { cormorant, open_sans } from "@/fonts/fonts";
import socialmedia1 from "@/assests/icons/facebook.png";
import socialmedia2 from "@/assests/icons/instagram.png";
import socialmedia3 from "@/assests/icons/linkedin.png";
import arrowLogo from "@/assests/icons/right-arrow.png";

const Footer = () => {
  const expertise = [
    {
      path: "/",
      name: "Serious car crash",
    },
    {
      path: "/",
      name: "Brain injury",
    },
    {
      path: "/",
      name: "Truck accidents",
    },
    {
      path: "/",
      name: "Semi-truch collision",
    },
    {
      path: "/",
      name: "Morotcycle accidents",
    },
  ];
  const dhakaOffice = [
    {
      field: "Address:",
      info: "House 12, Road 5, Dhanmondi R/A, ",
    },
    {
      field: "Telephone:",
      info: "+880-2-9612345",
    },
    {
      field: "Mobile:",
      info: "+880-1711-123456",
    },
    {
      field: "Email:",
      info: "info.dhaka@yourlawfirm.com",
    },
  ];
  const chattogramOffice = [
    {
      field: "Address:",
      info: "3rd Floor, Shah Amanat Tower, Agrabad,",
    },
    {
      field: "Telephone:",
      info: "+880-31-725678",
    },
    {
      field: "Mobile:",
      info: "+880-1812-654321",
    },
    {
      field: "Email:",
      info: "info.ctg@yourlawfirm.com",
    },
  ];

  return (
    <footer className={` ${open_sans.className} `}>
      <main className="bg-[#124547] text-white py-14">
        <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm md:mx-auto sm: mx-4 lg:text-start md:text-center sm: text-center grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10">
          {/* grid div -1  */}
          <div>
            <h1 className={` ${cormorant.className} text-3xl mb-5 `}>
              About Us
            </h1>
            <p className="md:text-sm sm: text-xs mb-5">
              Lorem Ipsum. Proin gravida nibhel velit auctor aliqean
              solliciudiorem quis bibendum nisi elit consequat
            </p>
            {/* social media link section  */}
            <div className="text-center ">
              <div className="flex lg:justify-start md:justify-center sm: justify-center gap-5 mt-4">
                <Image
                  src={socialmedia1}
                  alt="social media logo"
                  className=" w-5"
                />
                <Image
                  src={socialmedia2}
                  alt="social media logo"
                  className=" w-5"
                />
                <Image
                  src={socialmedia3}
                  alt="social media logo"
                  className=" w-5"
                />
              </div>
            </div>
          </div>
          {/* grid div -2  */}
          <div>
            <h1 className={` ${cormorant.className} text-3xl mb-5 `}>
              Our Expertise
            </h1>
            <div>
              {expertise.map(({ path, name }, index) => (
                <ul key={index}>
                  <li className="flex lg:justify-start md:justify-center sm: justify-center items-center hover:underline md:text-sm sm: text-xs md:px-0 sm: px-2 mb-3">
                    {" "}
                    <Image
                      src={arrowLogo}
                      alt="star logo"
                      className="w-4 me-2"
                    />{" "}
                    {name}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {/* grid div -3  */}
          <div>
            <h1 className={` ${cormorant.className} text-3xl mb-5 `}>
              Dhaka Office
            </h1>
            <div>
              {dhakaOffice.map(({ field, info }, index) => (
                <ul key={index}>
                  <li className="flex lg:justify-start md:justify-center sm: justify-center items-center md:text-sm sm: text-xs md:px-0 sm: px-2 mb-3">
                    {" "}
                    <span className="me-2">{field}</span>
                    <span className="">{info}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {/* grid div -4  */}
          <div>
            <h1 className={` ${cormorant.className} text-3xl mb-5 `}>
              Chattogram Office
            </h1>
            <div>
              {chattogramOffice.map(({ field, info }, index) => (
                <ul key={index}>
                  <li className="flex lg:justify-start md:justify-center sm: justify-center items-center md:text-sm sm: text-xs md:px-0 sm: px-2 mb-3">
                    {" "}
                    <span className="me-2">{field}</span>
                    <span className="">{info}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </main>
      <main className="bg-[#0c2c2d] text-white py-5">
      <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm md:mx-auto sm: mx-4 text-center">
<p>© 2025 NextLaw, All Rights Reserved</p>
      </div>
      </main>
    </footer>
  );
};

export default Footer;
