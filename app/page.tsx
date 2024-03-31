"use client";
import React from "react";
import Gallery from "@/components/gallery/Gallery";
import Image from "next/image";
import Contact from "./contact/Contact";
import About from "./about/page";
import Service from "./service/page";

import fb from "@/app/@resources/icons/fb.png";
import insta from "@/app/@resources/icons/Insta.png";
import gamil from "@/app/@resources/icons/Gmail.png";
import youtube from "@/app/@resources/icons/Youtube.png";
import linkedInd from "@/app/@resources/icons/Linked in.png";
import phone from "@/app/@resources/icons/Phone.png";
import share from "@/app/@resources/icons/Share.png";
import dloc from "@/app/@resources/icons/Direction.png";
import location from "@/app/@resources/icons/location.png";
import india from "@/app/@resources/img/india.png";
import fShadow from "@/app/@resources/img/fShadow.png";
import backGround from "@/app/@resources/img/back.jpeg";
import { Suspense } from "react";

import fbw from "@/app/@resources/icons/Facebook w.png";
import instaw from "@/app/@resources/icons/Insta w.png";
import gamilw from "@/app/@resources/icons/Facebook w-1.png";
import youtubew from "@/app/@resources/icons/Youtube w.png";
import linkedIndw from "@/app/@resources/icons/Linked in w.png";

export default function Home() {
  const [imgReq, setImgReq] = React.useState(null);
  return (
    <main className="">
      <div className="w-full h-[85vh] ">
        <Suspense fallback={<div>Loading...</div>}>
          <video
            width="100%"
            // height="100%"
            style={{ height: "85vh" }}
            src={require("@/app/@resources/video/Art_3.mp4")}
            autoPlay
            loop={true}
            muted={true}
          >
            {/* <source src={require("@/app/@resources/video/Art.mp4")} type="video/mp4" /> */}
          </video>
          {/* <VideoPlayer /> */}
        </Suspense>
      </div>
      <div className=" mx-[12vw]">
        <div id="gallary" style={{scrollMargin: "18vh"}} className="my-[24px]">
          <Gallery setImgReq={setImgReq} />
        </div>
        <div className=" flex items-center justify-center my-[96px]">
          <Image
            src={backGround}
            objectFit="cover"
            className=" relative w-[45vw] h-[45vw] rounded-full "
          />
          <div className=" w-[45vw] h-[45vw] rounded-full  absolute flex items-center justify-center flex-col">
            <h2 className=" text-white text-5xl text-center font-bold font-ebg">
              Order a Custom <br /> Painting?
            </h2>
            <div className=" grow max-h-[8vw]"></div>
            <div className=" w-16 h-16 bg-white flex items-center justify-center rounded-full">
              <Image src={dloc} />
            </div>
          </div>
        </div>
        <div id="services" className="   h-[55vw] bg-black overflow-hidden">
          <Service />
        </div>
        <div id="piy" style={{scrollMargin: "19vh"}} className="h-[34vw] my-[96px] ">
          <About />
        </div>
        <div id="contact" style={{scrollMargin: "15vh"}} className="   h-[55vw] ">
          <Contact imgReq={imgReq} />
        </div>
        <div className=" flex items-center justify-center my-[96px]">
          <div className=" relative w-[45vw] h-[45vw] rounded-full flex items-center justify-center flex-col">
            <Image
              src={backGround}
              layout="fill"
              objectFit="cover"
              className=" relative w-[45vw] h-[45vw] rounded-full -z-10"
            />
            <div className=" w-[20vw] h-[10vw] absolute top-10">
              <div className="flex h-[10vw] items-center justify-center">
                <div className="mx-2">
                  <Image className="w-8" src={fbw} />
                </div>
                <div className="mx-2">
                  <Image className="w-8" src={instaw} />
                </div>
                <div className="mx-2">
                  <Image className="w-8" src={gamilw} />
                </div>
                <div className="mx-2">
                  <Image className="w-8" src={youtubew} />
                </div>
                <div className="mx-2">
                  <Image className="w-8" src={linkedIndw} />
                </div>
              </div>
            </div>
            <div className=" w-[20vw] h-[10vw] absolute bottom-10 ">
              <div className="flex h-[10vw] items-center justify-center flex-col">
                {/* <h2 className=" text-white text-2xl font-lato">contact@piystudio.com</h2> */}
                <h2 className=" text-white text-2xl font-lato">
                  Privacy Policy{" "}
                </h2>
              </div>
            </div>
            <div className=" w-[120px] h-[20vw] absolute left-10">
              <div className=" flex justify-center items-center h-[20vw]">
                <Image className="w-8" src={share} />
                <h2 className=" text-white ml-2 text-2xl font-lato">Share</h2>
              </div>
            </div>
            <div className=" w-[120px] h-[20vw] absolute right-10">
              <div className=" flex justify-center items-center h-[20vw]">
                <Image className="w-8" src={phone} />
                <h2 className=" text-white ml-2 text-2xl font-lato">Call</h2>
              </div>
            </div>
            <div className="w-[18vw] h-[18vw] bg-slate-500 rounded-full">
              <div className=" flex flex-col justify-center items-center h-[20vw]">
                <Image className="w-8" src={location} />
                <h2 className=" text-white text-2xl font-bold uppercase font-lato">
                  India
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex items-center justify-center flex-col">
          <Image
            src={fShadow}
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}
