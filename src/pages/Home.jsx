import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallary/Gallary";
import Header from "../components/header/Header";
import Intro from "../components/Intro/Intro";
import Service from "../components/services/Service";

import { createSignal } from "solid-js";

function Home() {
  const [painting, setPainting] = createSignal(null);
  console.log("selected painting", painting());
  return (
    <div class="bg-[#ECEDEE]">
      {/* <div class="w-full h-[2px] bg-[#434343]" /> */}
      <Header />
      <div class=" md:px-[80px] px-4">
        {/* <div class="w-full flex items-center justify-center my-3">
          <h1 class=" uppercase text-[80px] ">piyush gupta studio</h1>
        </div> */}
        <div class="w-full h-[80px]  " />
        <Intro />
        <Banner />
        <Gallery setPainting={setPainting} />
      </div>

      <Service />
      <About />

      <Contact painting={painting} />
    </div>
  );
}

export default Home;
