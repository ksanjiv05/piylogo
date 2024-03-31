/* eslint-disable @next/next/no-img-element */
import React from "react";
import fb from "@/app/@resources/icons/fb.png";
import insta from "@/app/@resources/icons/Insta.png";
import gamil from "@/app/@resources/icons/Gmail.png";
import youtube from "@/app/@resources/icons/Youtube.png";
import linkedInd from "@/app/@resources/icons/Linked in.png";
import Image from "next/image";
import pic from "@/app/@resources/img/pic2.jpg";

function About() {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div className="h-[34vw] w-[34vw] ">
        <Image
          src={pic}
          alt="arrow-right"
          // objectFit="cover"
          // fill="cover"
          className=" h-full w-full"
        />
      </div>
      <div className="h-[34vw]   px-8">
        <h1 className=" text-5xl font-bold py-[40px] font-ebg">Piyush Gupta </h1>
        <p className=" font-lato tracking-wider">
          Step into the evocative world of Piyush gupta or Piy, a visionary
          graduate from NIFT with over a decade of artistic mastery. With a
          profound commitment to creating immersive experiences.
          <br />
          Piy invites you to feel the pulse of their art. Every stroke on the
          canvas is a portal to emotions, a reflection of a journey shaped by
          10+ years of unwavering dedication to the craft.
          <br />
          Through vibrant colors and dynamic forms, Piy seeks to transcend the
          visual, offering an opportunity to immerse yourself in a realm where
          art is not just seen but felt. Join us in exploring a gallery that
          breathes life into every canvas, inviting you to experience the
          profound depth of Piy's artistic expression.
        </p>

        <div className="flex flex-1 mt-[40px] items-center justify-start">
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
            <Image className="w-6" src={youtube}  title="youtube"/>
          </div>
          <div className="mx-1">
            <Image className="w-6" src={linkedInd}  title="linkedin"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
