import { createSignal, createEffect } from "solid-js";
import axios from "axios";
import { static_URL, API_URL } from "../../config/config";

const Contact = ({ painting }) => {
  const [loader, setLoader] = createSignal(false);
  const [data, setData] = createSignal({
    name: "",
    email: "",
    purpose: "buy art",
    message: "",
    phone: "",
    address: "",
    website: "",
  });
  const onChange = (ev) => {
    const { name, value } = ev.target;
    // Update other fields
    setData({
      ...data(),
      [name]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(data());
    setLoader(true);
    axios
      .post(
        `${API_URL}/contact`,
        { painting: painting()?._id, ...data() },
        {
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        }
      )
      .then((res) => {
        console.log(res.data);
        setLoader(false);
        alert("Your message has been sent");
        setData({
          name: "",
          email: "",
          purpose: "buy art",
          message: "",
          phone: "",
          address: "",
          website: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to send message");
        setLoader(false);
      });
  };

  // createEffect(() => {
  //   console.log(painting());
  //   setData({
  //     ...data(),
  //     name: painting()?.name,
  //     message: `i want this art ${painting()?._id} ${painting()?.description}`,
  //   });
  // });
  createEffect(() => {
    if (painting) {
      setData((prevData) => ({
        ...prevData,
        // name: painting().name,
        message: `I would love to purchase this art piece titled, "${
          painting().name
        }"`,
      }));
    }
  });

  return (
    <div id="contact" class="w-full  p-[80px] bg-[#252525]">
      <center>
        <div className=" md:w-[55%]  md:p-12 p-8 ">
          <h1 className=" text-white md:text-5xl text-[48px] md:mb-[36px] mb-[10px] uppercase text-center font-nunito">
            Contact
          </h1>

          <label className=" text-white float-left font-nunito">
            Your Name*
          </label>
          <br />
          <input
            type="text"
            name="name"
            onChange={onChange}
            className="w-[100%] px-2 h-10 md:mb-6 mb-2"
            value={data()?.name}
          />

          <label className=" text-white float-left font-nunito">
            Your Purpose*
          </label>
          <br />
          <br />
          <div className="flex h-8  items-center justify-between ">
            <div className="flex items-center justify-center">
              <input
                type="radio"
                name="purpose"
                //value="service"

                value="buy art"
                onChange={onChange}
                className="text-white w-6 h-8 "
              />
              <label className=" text-white font-lato  md:text-xl text-[12px] mx-2 font-nunito">
                Buy Art
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="radio"
                name="purpose"
                //value="service"
                onChange={onChange}
                className="text-white font-lato w-6 h-8 "
                value={"custom art"}
              />
              <label className=" text-white font-lato  md:text-xl text-[12px] mx-2 font-nunito">
                Custom Art
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="radio"
                name="purpose"
                //value="service"
                onChange={onChange}
                className="text-white font-lato w-6 h-8 "
                value={"inquire"}
              />
              <label className=" text-white float-left md:text-xl text-[12px]  mx-2 font-nunito">
                Inquire
              </label>
            </div>
          </div>
          <br />

          <label className="  text-white float-left font-nunito">
            Your Phone Number
          </label>
          <br />
          <input
            type="text"
            name="phone"
            onChange={onChange}
            className="w-[100%] px-2 h-10 md:mb-6 mb-2"
            //value={data?.phone}
          />
          {/* <br />
          <br /> */}
          <label className=" text-white float-left font-nunito">
            Your Email*
          </label>
          <br />
          <input
            type="text"
            name="email"
            onChange={onChange}
            className="w-[100%] px-2 h-10 md:mb-6 mb-2"
            //value={data?.email}
          />

          <label className=" text-white float-left font-nunito">
            Your Message*
          </label>
          <br />
          <textarea
            rows={3}
            name="message"
            onChange={onChange}
            value={data()?.message}
            className="p-2 w-[100%]"
          ></textarea>

          <br />
          {data().purpose == "buy art" && (
            <>
              <label className=" text-white float-left font-nunito mt-4">
                Your Address
              </label>
              <br />
              <textarea
                rows={3}
                name="address"
                onChange={onChange}
                //value={data?.message}
                className="p-2 w-[100%]"
              ></textarea>
            </>
          )}

          <div
            onClick={handleSubmit}
            disabled={loader()}
            className="  mt-[36px] py-[16px] px-[32px] bg-white hover:bg-blue-500 rounded-full cursor-pointer "
          >
            <p className=" uppercase  text-[24px] font-bold font-nunito">
              {loader() ? "Sending..." : "Submit"}
            </p>
            {/* <Image src={dr} /> */}
          </div>
        </div>
      </center>
      <div class="w-full h-[2px] bg-[#434343]" />

      <div class="mt-[40px] flex flex-row">
        <div class="w-full flex flex-row ">
          <a href="https://www.instagram.com/piy.art/">
            <img
              width={40}
              class="mr-[16px]"
              // height={40}
              src="src/assets/icons/1.png"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100004291560400">
            <img
              width={40}
              class="mr-[16px]"
              // height={40}
              src="src/assets/icons/2.png"
            />
          </a>
          <a href="https://www.linkedin.com/company/piystudio/?viewAsMember=true">
            <img
              width={40}
              class="mr-[16px]"
              // height={40}
              src="src/assets/icons/3.png"
            />
          </a>
          <a href="https://x.com/PiyStudio">
            <img
              width={40}
              class="mr-[16px]"
              // height={40}
              src="src/assets/icons/4.png"
            />
          </a>
          <a href="https://www.youtube.com/@piystudio">
            <img
              width={40}
              class="mr-[16px]"
              // height={40}
              src="src/assets/icons/5.png"
            />
          </a>
        </div>

        <div class="flex-1"></div>
        <div class="flex flex-row ">
          <div class="border-r-[1px] px-4 border-[#434343] ">
            <a href="mailto:piyushguptastudio@gmail.com">
              <img src="src/assets/icons/mail.png" width={40} height={40} />
            </a>
          </div>
          <div class="border-r-[1px] px-4 border-[#434343] ">
            <img src="src/assets/icons/phone.png" width={40} height={40} />
          </div>
          <div class=" w-[230px] pl-4">
            <h2 class=" text-[24px] text-white font-nunito">Privacy Policy</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
// Instagram - https://www.instagram.com/piy.art/
// LinkedIn - https://www.linkedin.com/company/piystudio/?viewAsMember=true
// Youtube - https://www.youtube.com/@piystudio
// Twitter - https://x.com/PiyStudio
// Facebook - https://www.facebook.com/profile.php?id=100004291560400
// Mail id - piyushguptastudio@gmail.com
