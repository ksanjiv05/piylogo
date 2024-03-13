import Image from "next/image";
import React from "react";
// import { FaFacebook,FaInstagram, FaRegEnvelope,FaLinkedinIn,FaYoutube } from 'react-icons/fa';
import fb from "@/app/@resources/icons/fb.png"
import insta from "@/app/@resources/icons/Insta.png"
import gamil from "@/app/@resources/icons/Gmail.png"
import youtube from "@/app/@resources/icons/Youtube.png"
import linkedInd from "@/app/@resources/icons/Linked in.png"

function Navbar() {
  return (
    <div className="sticky top-0 bg-white  z-[1]" >
    <div className="flex h-[12vh] items-center  justify-center">
        <h1 className=" text-3xl uppercase font-lato font-bold">Piy</h1>
    </div>
    <div className="grid grid-cols-3 gap-2 pb-4 px-6 place">
      <div className="mt-2">
        <div className="flex items-center justify-start">
          <div className="mx-1">
                  <Image className="w-6" src={fb} />
                </div>
                <div className="mx-1">
                   <Image className="w-6" src={insta} />
                </div>
                <div className="mx-1">
                   <Image className="w-6" src={gamil} />
                </div>
                <div className="mx-1">
                   <Image className="w-6" src={youtube} />
                </div>
                <div className="mx-1">
                   <Image className="w-6" src={linkedInd} />
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
          <div className="mx-3 uppercase font-lato ">gallery</div>
          <div className="mx-3 uppercase font-lato ">services</div>
          <div className="mx-3 uppercase font-lato ">piy</div>
          <div className="mx-3 uppercase font-lato ">contact</div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-end">
          <div className=" uppercase border-2 px-[12px] py-[5px] rounded-full cursor-pointer font-lato">request commission</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
