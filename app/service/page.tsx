"use client";
import React from "react";
import Image from "next/image";
import a1 from "@/app/resources/img/PortraitPainitng.jpg";
import a2 from "@/app/resources/img/Modernart.jpg";

function Service() {
  const [img, setImg] = React.useState(a1);
  const [isPaused, setIsPaused] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);

  const listOfImages = [a1, a2];

  React.useEffect(() => {
    const id = setInterval(() => {
      if (isPaused) {
        return;
      }
      setImg(listOfImages[currentImage]);
      setCurrentImage((currentImage + 1) % listOfImages.length);
    }, 2000);

    return () => clearInterval(id);
  });
  
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
  return (
    <div className=" overflow-hidden " onMouseOver={() => setIsPaused(true)} onMouseOut={() => setIsPaused(false)}>
      <Image src={img} alt="image" className="w-[76vw] h-[55vw]  " style={{position:"absolute", }} />
      <div className="w-full h-[55vw] py-[4vw] overflow-hidden" >
        <div className=" h-[47vw] w-[50vw]  flex overflow-hidden bg-black -ml-[28vw] opacity-80 rounded-full">
          <div className="flex-1 opacity-30 z-20"></div>
          <div className="w-[19vw] flex  flex-col justify-center">
            <h1 className=" text-5xl font-bold text-white font-ebg">
              Services
            </h1>
            {/* <p className=" text-white font-ebg uppercase text-[20px]">
              Painting & Acrlyic
            </p> */}
            <br />
            <ul className=" text-white">
              <li onClick={()=>setImg(a1)} onMouseOver={()=>setImg(a1)} className=" text-[20px] font-lato my-[8px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Portrait Painting
              </li>
              <li className=" text-[20px] font-lato my-[8px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Fantasy Painting
              </li>
              <li className=" text-[20px] font-lato my-[8px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Gods & Goddess
              </li>
              <li onClick={()=>setImg(a2)} onMouseOver={()=>setImg(a2)} className=" text-[20px] font-lato my-[8px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Modern Art
              </li>
               <li className=" text-[20px] font-lato my-[8px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Installation Art
              </li>
              <li className=" text-[20px] font-lato my-[8px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Handicraft
              </li>
              <br />
              <li
              onClick={() => goToSection("#contact")}
              className="py-2 bg-white rounded-full font-bold uppercase text-black w-[100px] font-lato text-center cursor-pointer">
                Contact 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
