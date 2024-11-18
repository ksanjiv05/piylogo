const Service = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="services"
      class="w-full mt-[80px] px-[80px] pb-[80px] pt-[55px] bg-white"
    >
      <h1 class=" uppercase text-[64px] text-center font-nunito ">Services</h1>

      <div class="grid grid-cols-2 gap-[30px]">
        <div class="rounded-[20px] pb-[30px] overflow-hidden">
          <img
            // class=" w-full h-[500px]  "
            class=" h-[500px]   "
            style={{ height: "auto" }}
            src="public/assets/images/sb.jpeg"
          />
          <div class="w-full    p-[30px]  bg-[#333333]  h-[100%]">
            <h2 class="text-[40px] text-white font-bold font-nunito">
              Paintings
            </h2>
            <p class="text-[18px] py-[16px] text-white font-nunito">
              "Bring your vision to life with bespoke artwork crafted to elevate
              your environment. Our painting services blend creativity with
              precision to create timeless pieces just for you."
            </p>
            <button
              onClick={scrollToContact}
              class="bg-[#ffffff] mt-4 text-black text-[24px] px-[32px] py-[16px]  font-bold rounded-full font-nunito"
            >
              Contact
            </button>
          </div>
        </div>
        <div class="rounded-[20px] pb-[30px] overflow-hidden">
          <img
            class=" h-[500px]   "
            style={{ height: "auto" }}
            src="public/assets/images/sa.jpeg"
          />
          <div class="w-full    p-[30px]  h-[100%] bg-[#333333]">
            <h2 class="text-[40px] text-white font-bold font-nunito">
              Spatial Art
            </h2>
            <p class="text-[18px] py-[16px] text-white font-nunito">
              "Enhance your space with our curated decor art services, carefully
              crafted to add elegance, charm, and personality. Each piece is
              designed to transform every corner into a refined, inviting
              environment."
            </p>
            <button
              onClick={scrollToContact}
              class="bg-[#ffffff] mt-4 text-black text-[24px] px-[32px] py-[16px]  font-bold rounded-full font-nunito"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
