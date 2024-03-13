/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image";
import React from "react";
import Dialog from "../dialog/Dialog";
import img1 from "@/app/@resources/img/Chaplin.jpg";
import img2 from "@/app/@resources/img/Portrait.jpg";


function Gallery() {
const [open, setOpen] = React.useState(false);
const [image, setImage] = React.useState(undefined);

const handleDialog = (img) => {
  setImage(img);
  setOpen(true);
}

  return (
    <>
      <Dialog open={open} setOpen={setOpen} image={image} />
      <div className="grid grid-cols-2 gap-[24px] ">
         <div className="h-[36vw] rounded-2xl relative group overflow-hidden shadow-lg">
          <div className="h-[36vw] overflow-hidden" onClick={()=>handleDialog(img1)}>
            <Image
              src={img1}
              // layout="contain"
              // objectFit="cover"
              // fill="cover"
              alt="arrow-right"
              className="h-[36vw] w-full"
            />
          </div>
          <div className="h-[6vw] bg-white absolute w-full flex -bottom-[6vw] transition-all duration-300 ease-linear group-hover:bottom-0 items-center justify-between p-4">
            <div>
              <h2 className=" capitalize font-ebg text-2xl text-slate-600">the painting heading</h2>
              <p className=" font-lato">description</p>
            </div>
            <div>
              <div className="px-[18px] py-2 rounded-full bg-slate-600 uppercase text-xl text-white font-lato">
                Request
              </div>
            </div>
          </div>
        </div>
        <div className="h-[36vw] rounded-2xl relative group overflow-hidden shadow-lg">
          <div className="h-[36vw] overflow-hidden"  onClick={()=>handleDialog(img2)}>
            <Image
              src={img2}
              alt="arrow-right"
              objectFit="cover"
              fill="cover"
              className="h-[36vw] w-full"
            />
          </div>
          <div className="h-[6vw] bg-white absolute w-full flex -bottom-[6vw] transition-all duration-300 ease-linear group-hover:bottom-0 items-center justify-between p-4">
            <div>
              <h2 className=" capitalize font-ebg text-2xl text-slate-600">the painting heading</h2>
              <p className=" font-lato">description</p>
            </div>
            <div>
              <div className="px-[18px] py-2 rounded-full bg-slate-600 uppercase text-xl text-white font-lato">
                Request
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
