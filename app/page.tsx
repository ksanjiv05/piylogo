import Gallery from "@/components/gallery/Gallery";
import Image from "next/image";
import Contact from "./contact/Contact";
import About from "./about/page";
import Service from "./service/page";

import fb from "@/app/@resources/icons/fb.png"
import insta from "@/app/@resources/icons/Insta.png"
import gamil from "@/app/@resources/icons/Gmail.png"
import youtube from "@/app/@resources/icons/Youtube.png"
import linkedInd from "@/app/@resources/icons/Linked in.png"
import phone from "@/app/@resources/icons/Phone.png"
import share from "@/app/@resources/icons/Share.png"
import dloc from "@/app/@resources/icons/Direction.png"
import location from "@/app/@resources/icons/location.png"






export default function Home() {
  return (
    <main className="">
      <div className="flex h-[85vh]">
        <video
          className=" bg-slate-700 w-full h-full"
          width="100%"
          height="100%"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
        ></video>
      </div>
      <div className=" mx-[12vw]">
        <div className="my-[24px]">
          <Gallery />
        </div>
        <div className=" flex items-center justify-center my-[96px]">
          <div className=" w-[45vw] h-[45vw] rounded-full bg-black flex items-center justify-center flex-col">
            <h2 className=" text-white text-5xl text-center font-bold font-ebg">
              Need a Custom <br /> Painting?
            </h2>
            <div className=" grow max-h-[8vw]"></div>
            <div className=" w-16 h-16 flex items-center justify-center rounded-full bg-white">
              <Image src={dloc} />
            </div>
          </div>
        </div>
        <div className="   h-[55vw] bg-black">
          <Service />
        </div>
        <div className="h-[34vw] my-[96px] ">
          <About />
        </div>
        <div className="   h-[55vw] bg-black">
          <Contact />
        </div>
        <div className=" flex items-center justify-center my-[96px]">
          <div className=" relative w-[45vw] h-[45vw] rounded-full bg-black flex items-center justify-center flex-col">
            <div className=" w-[20vw] h-[10vw] absolute top-10">
              <div className="flex h-[10vw] items-center justify-center">
                <div className="mx-2">
                  <Image className="w-8" src={fb} />
                </div>
                <div className="mx-2">
                   <Image className="w-8" src={insta} />
                </div>
                <div className="mx-2">
                   <Image className="w-8" src={gamil} />
                </div>
                <div className="mx-2">
                   <Image className="w-8" src={youtube} />
                </div>
                <div className="mx-2">
                   <Image className="w-8" src={linkedInd} />
                </div>
              </div>
            </div>
            <div className=" w-[20vw] h-[10vw] absolute bottom-10 ">
              <div className="flex h-[10vw] items-center justify-center flex-col">
                <h2 className=" text-white text-2xl font-lato">contact@piystudio.com</h2>
                <h2 className=" text-white text-2xl font-lato">Terms & Conditions</h2>

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
                <h2 className=" text-white text-2xl uppercase font-lato">India</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
