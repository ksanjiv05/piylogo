"use client";
import React from "react";
import dr from "@/app/@resources/icons/Direction.png";
import Image from "next/image";

function Contact() {
  const [data, setData] = React.useState({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    console.log(data);

    const formData = new FormData();
    const keys = Object.keys(data);
    data && keys.forEach((key) => formData.append(key, data[key]));

    const response = await fetch("/api/mail", {
      method: "post",
      body: formData,
    });
    const dataRes = await response.json();
    console.log(dataRes);
    if (dataRes.stats) {
      alert("Email Sent");
    } else {
      alert("Email not Sent");
    }
  };

  return (
    <div className='w-full h-[55vw] py-[4vw] overflow-hidden  flex flex-col items-center  bg-black bg-[url("/img/contact-texture.svg")]'>
      <div className=" w-[55%] p-12">
        <h1 className=" text-white text-5xl mb-[36px] font-ebg font-semibold">
          Contact
        </h1>

        <label className=" text-white font-lato">Name*</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={onChange}
          className="w-[100%] px-2 h-10"
        />
        <br />
        <br />

        <label className="  text-white font-lato">Phone Number*</label>
        <br />
        <input
          type="text"
          name="phone"
          onChange={onChange}
          className="w-[100%] px-2 h-10"
        />
        <br />
        <br />
        <label className=" text-white font-lato">Email*</label>
        <br />
        <input
          type="text"
          name="email"
          onChange={onChange}
          className="w-[100%] px-2 h-10"
        />
        <br />
        <br />
        <label className=" text-white font-lato">Purpose*</label>
        <br />
        <div className="flex h-8  items-center justify-between ">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              name="purpose"
              value="service"
              className="text-white font-lato w-6 h-8 "
            />
            <label className=" text-white font-lato text-xl mx-2">
              Buy Art
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="radio"
              name="purpose"
              value="service"
              className="text-white font-lato w-6 h-8 "
            />
            <label className=" text-white font-lato text-xl mx-2">
              Custom Art
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="radio"
              name="purpose"
              value="service"
              className="text-white font-lato w-6 h-8 "
            />
            <label className=" text-white font-lato text-xl mx-2">
              Project/Business
            </label>
          </div>
        </div>
        <br />

        <label className=" text-white font-lato">Message*</label>
        <br />
        <textarea
          rows={3}
          name="message"
          onChange={onChange}
          className=" w-[100%]"
        ></textarea>

        <div
          onClick={handleSubmit}
          className="  mt-[36px] py-2 px-4 bg-white rounded-full cursor-pointer w-32 flex"
        >
          <p className=" uppercase font-lato">Contact</p>
          <Image src={dr} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
