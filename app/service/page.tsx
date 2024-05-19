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
    }, 4000);

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
      <Image src={img} alt="image" className={`md:w-[76vw] w-[88vw] md:h-[55vw] h-[65vw] transition-all duration-300 ${!isPaused ? 'animate-slider' : ''}`} style={{position:"absolute", }} />
      <div className="w-full md:h-[55vw] h-[65vw] py-[4vw] overflow-hidden" >
        <div className=" md:h-[47vw] h-[58vw] md:w-[50vw] w-[57vw]  flex overflow-hidden md:bg-black md:-ml-[28vw] -ml-[20vw] opacity-80 md:rounded-full">
          <div className="flex-1 opacity-30 z-20"></div>
          <div className="md:w-[19vw] w-[31vw] flex  flex-col justify-center">
            <h1 className=" md:text-5xl text-xl font-bold text-white font-ebg">
              Services
            </h1>
            {/* <br /> */}
            <ul className=" text-white md:mt-8 mt-3">
              <li onClick={()=>setImg(a1)} onMouseOver={()=>setImg(a1)} className=" md:text-[20px] text-[12px] font-lato md:my-[8px]  hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Portrait Painting
              </li>
              <li className=" md:text-[20px] text-[12px] font-lato md:my-[8px] my-[4px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Fantasy Painting
              </li>
              <li className=" md:text-[20px] text-[12px] font-lato md:my-[8px] my-[4px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Gods & Goddess
              </li>
              <li onClick={()=>setImg(a2)} onMouseOver={()=>setImg(a2)} className=" md:text-[20px] text-[12px] font-lato md:my-[8px] my-[4px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Modern Art
              </li>
               <li className=" md:text-[20px] text-[12px] font-lato md:my-[8px] my-[4px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Installation Art
              </li>
              <li className=" md:text-[20px] text-[12px] font-lato md:my-[8px] my-[4px] hover:border-l-2 hover:pl-4 hover:transition hover:ease-in-out">
                Handicraft
              </li>
              {/* <br /> */}
              <li
              onClick={() => goToSection("#contact")}
              className="md:mt-8 mt-3 md:py-2 py-[6px]  md:text-[18px] text-[12px] bg-white rounded-full font-bold uppercase text-black md:w-[120px] w-[90px] font-lato text-center cursor-pointer">
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
