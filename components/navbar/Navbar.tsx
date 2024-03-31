"use client";
import Image from "next/image";
import React from "react";
// import { FaFacebook,FaInstagram, FaRegEnvelope,FaLinkedinIn,FaYoutube } from 'react-icons/fa';
import fb from "@/app/@resources/icons/fb.png";
import insta from "@/app/@resources/icons/Insta.png";
import gamil from "@/app/@resources/icons/Gmail.png";
import youtube from "@/app/@resources/icons/Youtube.png";
import linkedInd from "@/app/@resources/icons/Linked in.png";
import Link from "next/link";
import { AnyAaaaRecord } from "dns";

function Navbar() {
  const goToSection = (id: any) => {
    if (document.querySelector(id)) {
      console.log(id)
      document.querySelector(id).scrollIntoView({ behavior: "smooth",marginTop: 400});
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
            <div className="mx-1">
              <Image className="w-6" src={fb} title="facebook" />
            </div>
            <div className="mx-1">
              <Image className="w-6" src={insta} title="instagram" />
            </div>
            <div className="mx-1">
              <Image className="w-6" src={gamil} title="gmail" />
            </div>
            <div className="mx-1">
              <Image className="w-6" src={youtube} title="youtube" />
            </div>
            <div className="mx-1">
              <Image className="w-6" src={linkedInd} title="linkedin" />
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
            <div onClick={()=>goToSection("#gallary")} className="mx-3 uppercase font-lato cursor-pointer ">
              gallery
            </div>
            <div onClick={()=>goToSection("#services")}  className="mx-3 uppercase font-lato cursor-pointer ">services</div>
            <div onClick={()=>goToSection("#piy")}  className="mx-3 uppercase font-lato cursor-pointer">piy</div>
            <div onClick={()=>goToSection("#contact")}  className="mx-3 uppercase font-lato cursor-pointer">contact</div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-end">
            <div onClick={()=>goToSection("#contact")} className=" uppercase border-2 px-[12px] py-[5px] rounded-full cursor-pointer font-lato">
              Custom Art
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
