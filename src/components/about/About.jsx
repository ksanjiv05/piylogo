const About = () => {
  return (
    <div id="studio" class="w-full scroll-m-20 md:scroll-m-2 md:p-[80px]">
      <div class="flex bg-white md:rounded-[20px] overflow-hidden">
        <div class="hidden md:block min-w-[540px]">
          <img src="public/assets/images/about.png" width={540} />
        </div>

        <div class=" min-w-[100%] md:hidden">
          <img src="public/assets/images/about.png" width={"100%"} />
        </div>

        <div class="hidden md:block  p-[70px]">
          <h1 class=" uppercase text-[64px] font-nunito">piyush gupta</h1>
          <p class="text-[18px] mt-[20px] font-nunito">
            Step into the evocative world of Piyush gupta or Piy, a visionary
            graduate from NIFT with over a decade of artistic mastery.
            <br /> <br /> With a profound commitment to creating immersive
            experiences. Piy invites you to feel the pulse of their art. Every
            stroke on the canvas is a portal to emotions, a reflection of a
            journey shaped by 10+ years of unwavering dedication to the craft.
            <br />
            <br />
            Through vibrant colors and dynamic forms, Piy seeks to transcend the
            visual, offering an opportunity to immerse yourself in a realm where
            art is not just seen but felt.
            <br /> <br /> Join us in exploring a gallery that breathes life into
            every canvas, inviting you to experience the profound depth of Piy's
            artistic expression.
          </p>
        </div>
      </div>
      <div class="block md:hidden  md:p-[70px] ">
        <div class="bg-white p-[25px] rounded-[21px] -top-4 pb-[40px]">
          <h1 class=" uppercase md:text-[64px] text-center text-[24px] font-nunito">
            piyush gupta
          </h1>
          <p class="text-[16px] mt-[20px] font-nunito">
            Step into the evocative world of Piyush gupta or Piy, a visionary
            graduate from NIFT with over a decade of artistic mastery.
            <br /> <br /> With a profound commitment to creating immersive
            experiences. Piy invites you to feel the pulse of their art. Every
            stroke on the canvas is a portal to emotions, a reflection of a
            journey shaped by 10+ years of unwavering dedication to the craft.
            <br />
            <br />
            Through vibrant colors and dynamic forms, Piy seeks to transcend the
            visual, offering an opportunity to immerse yourself in a realm where
            art is not just seen but felt.
            <br /> <br /> Join us in exploring a gallery that breathes life into
            every canvas, inviting you to experience the profound depth of Piy's
            artistic expression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
