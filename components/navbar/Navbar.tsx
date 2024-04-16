"use client";
import Image from "next/image";
import React from "react";
// import { FaFacebook,FaInstagram, FaRegEnvelope,FaLinkedinIn,FaYoutube } from 'react-icons/fa';
import fb from "@/app/resources/icons/fba.png";
import insta from "@/app/resources/icons/instaa.png";
import gamil from "@/app/resources/icons/gm.png";
import youtube from "@/app/resources/icons/yt.png";
import linkedInd from "@/app/resources/icons/lik.png";
import Link from "next/link";
import { AnyAaaaRecord } from "dns";

function Navbar() {
  const goToSection = (id: any) => {
    if (document.querySelector(id)) {
      console.log(id);
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth", marginTop: 400 });
      // document.querySelector(id).scrollTo({ top: 200,behavior: "smooth" })
      // window&&window.scrollBy(0, -300);
    }
  };

  React.useEffect(() => {}, []);

  return (
    <div className="sticky top-0 bg-white  z-[1]">
      <div className="flex h-[8vh] items-end  justify-center">
        <h1 className=" text-3xl uppercase font-lato font-bold">Piy</h1>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2 pb-4 px-6 place">
        <div className="mt-2">
          <div className="flex items-center justify-start">
            <div className="">
              <a href="https://www.facebook.com/profile.php?id=100004291560400">
                <Image className="w-6" src={fb} title="facebook" />
              </a>
            </div>
            <div className="">
              <a href="https://www.instagram.com/piy.art/">
                <Image className="w-6" src={insta} title="instagram" />
              </a>
            </div>
            <div className="mx-2">
              <a href="mailto:piyartstudio@gmail.com">

              <Image className="w-6" src={gamil} title="gmail" />
              </a>
            </div>
            <div className="mx-1">
              <a href="https://www.youtube.com/channel/UCSrEvTVeUboEZJDf_obFaiw">
                <Image className="w-6" src={youtube} title="youtube" />
              </a>
            </div>
            <div className="mx-1">
              <a href="https://www.linkedin.com/company/piy-art-studio/">
                <Image className="w-6" src={linkedInd} title="linkedin" />
              </a>
            </div>
            {/* <div className="mx-2">
            <FaFacebook size={28} className=" text-slate-500"/>
          </div>
          <div className="mx-2">
           <FaInstagram   size={28} className=" text-slate-500"/>
          </div>
          <div className="mx-2">
            <FaRegEnvelope  size={28} className=" text-slate-500" />
          </div>
          <div className="mx-2">
            <FaLinkedinIn  size={28} className=" text-slate-500" />
          </div>
          <div className="mx-2">
            <FaYoutube  size={28} className=" text-slate-500" />
          </div> */}
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-center">
            <div
              onClick={() => goToSection("#gallary")}
              className="mx-3 uppercase font-bold font-lato cursor-pointer "
            >
              gallery
            </div>
            <div
              onClick={() => goToSection("#services")}
              className="mx-3 uppercase font-bold font-lato cursor-pointer "
            >
              services
            </div>
            <div
              onClick={() => goToSection("#piy")}
              className="mx-3 uppercase font-bold font-lato cursor-pointer"
            >
              piy
            </div>
            <div
              onClick={() => goToSection("#contact")}
              className="mx-3 uppercase font-bold font-lato cursor-pointer"
            >
              contact
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-end">
            <div
              onClick={() => goToSection("#contact")}
              className=" uppercase font-bold border-2 px-[12px] py-[5px] rounded-full cursor-pointer font-lato"
            >
              Custom Art
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
