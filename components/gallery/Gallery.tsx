/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";
import Dialog from "../dialog/Dialog";
import img1 from "@/app/resources/img/Chaplin.jpg";
import img2 from "@/app/resources/img/Portrait.jpg";

const paintingArry = [
  {
    id: 1,
    src: img1,
    alt: "The Charlie Chaplin",
    name: "The Charlie Chaplin",
    description: "Acrylic ( 24 Inch x 30 Inch )",
    type: 1,
  },
  {
    id: 2,
    src: img2,
    alt: "Order Custom Portraits",
    name: "Order Custom Portraits",
    description: "Oil on Canvas",
    type: 2,
  },
 
];

function Gallery({setImgReq}) {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(undefined);


    const goToSection = (painting:any,id: any) => {
    setImgReq(painting)
    setImgReq(painting)

    if (document.querySelector(id)) {
      console.log(id)
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      // document.querySelector(id).scrollTo({ top: 200,behavior: "smooth" })
      // window&&window.scrollBy(0, -300);
    }
  };

  const handleDialog = (img) => {
    setImage(img);
    setOpen(true);
  };

  return (
    <>
      <Dialog open={open} setOpen={setOpen} image={image} />
      <div className="grid grid-cols-2 gap-[24px] ">
        {/* <div className="h-[36vw] rounded-2xl relative group overflow-hidden shadow-lg">
          <div
            className="h-[36vw] overflow-hidden"
            onClick={() => handleDialog(img1)}
          >
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
              <h2 className=" capitalize font-ebg text-2xl text-slate-600">
                the painting heading
              </h2>
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
          <div
            className="h-[36vw] overflow-hidden"
            onClick={() => handleDialog(img2)}
          >
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
              <h2 className=" capitalize font-ebg text-2xl text-slate-600">
                the painting heading
              </h2>
              <p className=" font-lato">description</p>
            </div>
            <div>
              <div className="px-[18px] py-2 rounded-full bg-slate-600 uppercase text-xl text-white font-lato">
                Request
              </div>
            </div>
          </div>
        </div> */}
        {
          paintingArry.map((painting) => (
            <div
              key={painting.id}
              className="h-[36vw] rounded-2xl relative group overflow-hidden shadow-lg"
            >
              <div
                className="h-[36vw] overflow-hidden"
                onClick={() => handleDialog(painting.src)}
              >
                <Image
                  src={painting.src}
                  alt={painting.alt}
                  objectFit="cover"
                  fill="cover"
                  className="h-[36vw] w-full"
                />
              </div>
              <div className="h-[6vw] bg-white absolute w-full flex -bottom-[6vw] transition-all duration-300 ease-linear group-hover:bottom-0 items-center justify-between p-4">
                <div>
                  <h2 className=" capitalize font-ebg text-2xl text-slate-600">
                    {painting.name}
                  </h2>
                  <p className=" font-lato">{painting.description}</p>
                </div>
                <div>
                  <div onClick={()=>goToSection(painting,"#contact")} className="  w-44 py-2 rounded-full bg-[#445975] uppercase text-xl text-white font-lato cursor-pointer text-center">
                    {painting.type === 1 ? "Buy" : "Custom Art"}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Gallery;
