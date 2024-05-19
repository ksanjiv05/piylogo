"use client";
import React from "react";
import Gallery from "@/components/gallery/Gallery";
import Image from "next/image";
import Contact from "./contact/Contact";
import About from "./about/page";
import Service from "./service/page";

import phone from "@/app/resources/icons/Phone.png";
import share from "@/app/resources/icons/Share.png";
import dloc from "@/app/resources/icons/Direction.png";
import india from "@/app/resources/icons/India.png";
import fShadow from "@/app/resources/img/fshadow.png";
import backGround from "@/app/resources/img/back.jpeg";
import { Suspense } from "react";

import fbw from "@/app/resources/icons/Facebook w.png";
import instaw from "@/app/resources/icons/Insta w.png";
import gamilw from "@/app/resources/icons/Facebook w-1.png";
import youtubew from "@/app/resources/icons/Youtube w.png";
import linkedIndw from "@/app/resources/icons/Linked in w.png";

export default function Home() {
  const [imgReq, setImgReq] = React.useState(null);
  console.log("--", imgReq);
  const goToSection = (id: any) => {
    if (document.querySelector(id)) {
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      // document.querySelector(id).scrollTo({ top: 200,behavior: "smooth" })
      // window&&window.scrollBy(0, -300);
    }
  };
  return (
    <main className="">
      <div className="w-full  ">
        <Suspense fallback={<div>Loading...</div>}>
          <video
            width="100%"
            // height="100%"
            style={{ width: "100vw" }}
            src={require("@/app/resources/video/Art_3.mp4")}
            autoPlay
            loop={true}
            muted={true}
          >
            {/* <source src={require("@/app/resources/video/Art.mp4")} type="video/mp4" /> */}
          </video>
          {/* <VideoPlayer /> */}
        </Suspense>
      </div>
      <div className=" md:mx-[12vw] mx-[6vw]">
        <div
          id="gallary"
          style={{ scrollMargin: "18vh" }}
          className="my-[24px]"
        >
          <Gallery setImgReq={setImgReq} />
        </div>
        <div className=" flex items-center justify-center my-[96px]">
          <Image
            src={backGround}
            objectFit="cover"
            className=" relative md:w-[45vw] w-[75vw] md:h-[45vw] h-[75vw] rounded-full " alt={""}          />
          <div className=" md:w-[45vw] w-[75vw] md:h-[45vw] h-[75vw] rounded-full  absolute flex items-center justify-center flex-col">
            <h2 className=" text-white md:text-5xl text-3xl text-center font-bold font-ebg">
              Order a Custom <br className="h-6" /> Painting ?
            </h2>
            <div className=" grow max-h-[8vw]"></div>
            <div
              onClick={() => goToSection("#contact")}
              className=" md:w-16 md:h-16 w-10 h-10 bg-white flex items-center justify-center rounded-full"
            >
              <Image src={dloc} />
            </div>
          </div>
        </div>
        <div id="services" className="   md:h-[55vw] h-[65vw] bg-black overflow-hidden">
          <Service />
        </div>
        <div
          id="piy"
          style={{ scrollMargin: "19vh" }}
          className="md:h-[34vw] my-[96px] "
        >
          <About />
        </div>
        <div
          id="contact"
          style={{ scrollMargin: "15vh" }}
          className=" md:h-[55vw] h-[70vh] "
        >
          <Contact imgReq={imgReq} />
        </div>
        <div className=" flex items-center justify-center my-[96px]">
          <div className=" relative md:w-[45vw] w-[75vw] md:h-[45vw] h-[75vw] rounded-full flex items-center justify-center flex-col">
            <Image
              src={backGround}
              layout="fill"
              objectFit="cover"
              className=" relative md:w-[45vw] w-[75vw] md:h-[45vw] h-[75vw] rounded-full -z-10" alt={""}            />
            <div className=" md:w-[20vw] w-[40vw]  md:h-[10vw] bg-red absolute md:top-10 top-12">
              <div className="flex md:h-[10vw]  items-center justify-center">
                <div className="md:mx-2 mx-1">
                  <a href="https://www.facebook.com/profile.php?id=100004291560400">
                    <Image className="md:w-8 w-12" src={fbw} alt={""} />
                  </a>
                </div>
                <div className="md:mx-2 mx-1">
                  <a href="https://www.instagram.com/piy.art/">
                    <Image className="md:w-8 w-12" src={instaw} />
                  </a>
                </div>
                <div className="md:mx-2 mx-1">
                  <a href="mailto:piyartstudio@gmail.com">
                    <Image className="md:w-8 w-12" src={gamilw} />
                  </a>
                </div>
                <div className="md:mx-2 mx-1">
                  <a href="https://www.youtube.com/channel/UCSrEvTVeUboEZJDf_obFaiw">
                    <Image className="md:w-8 w-12" src={youtubew} />
                  </a>
                </div>
                <div className="md:mx-2 mx-1">
                  <a href="https://www.linkedin.com/company/piy-art-studio/">
                    <Image className="md:w-8 w-12" src={linkedIndw} />
                  </a>
                </div>
              </div>
            </div>
            <div className=" md:w-[20vw] w-[30vw] h-[10vw] absolute md:bottom-10 bottom-12 ">
              <div className="flex h-[10vw] items-center justify-center flex-col">
                {/* <h2 className=" text-white text-2xl font-lato">contact@piystudio.com</h2> */}
                <h2 className=" text-white md:text-2xl text-[15px] font-lato">
                  Privacy Policy{" "}
                </h2>
              </div>
            </div>
            <div className=" md:w-[120px] w-[90px] md:h-[20vw] absolute md:left-10 left-4">
              <div className=" flex justify-center items-center h-[20vw]">
                <Image className="w-8" src={share} />
                <h2 className=" text-white ml-2 md:text-2xl text-[15px] font-lato">Share</h2>
              </div>
            </div>
            <div className=" md:w-[120px] w-[90px]  h-[20vw] absolute md:right-10 right-4">
              <div className=" flex justify-center items-center h-[20vw]">
                <Image className="w-8" src={phone} />
                <h2 className=" text-white ml-2 md:text-2xl text-[15px] font-lato">Call</h2>
              </div>
            </div>
            <div className="md:w-[18vw] w-[20vw] h-[20vw] md:h-[18vw] bg-white rounded-full">
              <div className=" flex  justify-center items-center h-[18vw]">
                <Image className="md:w-[7vw] w-[12vw] " src={india} />
                {/* <h2 className=" text-white text-2xl font-bold uppercase font-lato">
                  India
                </h2> */}
              </div>
            </div>
          </div>
        </div>
        <div className="  flex items-center justify-center flex-col">
          <Image src={fShadow} objectFit="cover" className="w-[45vw]" />
        </div>
      </div>
    </main>
  );
}
