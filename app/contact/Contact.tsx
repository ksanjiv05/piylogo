"use client";
import React from "react";
import dr from "@/app/@resources/icons/Direction.png";
import Image from "next/image";
import blur from "@/app/@resources/img/blur.jpg";
import success from "@/app/@resources/img/success.png";

type ContactProps = {
  id: number;
  src: any;
  alt: string;
  name: string;
  type: number;
  imgReq: any;
};

function Contact({ imgReq }: ContactProps) {
  const [data, setData] = React.useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [open, setOpen] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    console.log(data);

    if (
      !data.name ||
      !data.phone ||
      !data.email ||
      !data.purpose ||
      !data.message
    ) {
      alert("Please fill all the fields");
      return;
    }

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
      // alert("Email Sent");
      setOpen(true);
      // setTimeout(() => {
      //   setOpen(false);
      // }, 3000);
      setData({
        name: "",
        phone: "",
        email: "",
        purpose: "",
        message: "",
      });
    } else {
      alert("Email not Sent");
    }
  };
  React.useEffect(() => {
    console.log(imgReq);
    if (imgReq) {
      console.log(imgReq);
      setData({
        ...data,
        message: ` I want to buy this painting " ${imgReq.name} - ${imgReq.id} "`,
      });
    }
  }, [imgReq]);
  console.log(imgReq);

  const close = () => {
    setOpen(false);
    setData({
      name: "",
      phone: "",
      email: "",
      purpose: "",
      message: "",
    });
  }


  return (
    <>
      <div className={` ${open ? "block" : "hidden"}`} onClick={close}>
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity overflow-y-scroll"
        ></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end bg-gray-600 bg-opacity-85 justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform flex-col flex justify-between overflow-hidden rounded-lg border-2 bg-white text-left shadow-xl transition-all sm:my-8  sm:max-w-6xl h-[90vh] overflow-y-scroll">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <Image src={success} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[55vw] relative overflow-hidden  flex flex-col items-center justify-center  "
        style={{ justifyContent: "center" }}
      >
        <Image src={blur} className="h-[55vw]  absolute -z-10" />
        <div className=" w-[55%] p-12 ">
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
            value={data?.name}
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
            value={data?.phone}
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
            value={data?.email}
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
                Inquire
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
            value={data?.message}
            className="p-2 w-[100%]"
          ></textarea>

          <div
            onClick={handleSubmit}
            className="  mt-[36px] py-2 px-4 bg-white hover:bg-blue-500 rounded-full cursor-pointer w-32 flex"
          >
            <p className=" uppercase font-lato font-bold ">Contact</p>
            <Image src={dr} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
