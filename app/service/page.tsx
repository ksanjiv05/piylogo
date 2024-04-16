"use client";
import React from "react";
import Image from "next/image";
import a1 from "@/app/@resources/img/PortraitPainitng.jpg";
import a2 from "@/app/@resources/img/Modernart.jpg";


function Service() {
  const [img, setImg] = React.useState(a1);
  // React.useEffect(() => {
  //   const id = setInterval(() => {
  //     setImg(a1===img?a2:a1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);
  return (
    <div className=" overflow-hidden ">
      <Image src={img}  className="w-[76vw] h-[55vw]  " style={{position:"absolute", }} />
      <div className="w-full h-[55vw] py-[4vw] overflow-hidden    ">
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
              <li className="py-2 bg-white rounded-full font-bold uppercase text-black w-[100px] font-lato text-center">
                Contact 
              </li>
            </ul>
          </div>
        </div>ß
      </div>
    </div>
  );
}

export default Service;
