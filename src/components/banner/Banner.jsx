import { API_URL, static_URL } from "../../config/config";

import axios from "axios";
const Banner = () => {
  return (
    <div class="w-full h-[90vh]  mb-[30px]">
      <div class="w-full h-[90vh] rounded-[20px] mt-[30px] overflow-hidden ">
        <video
          // ref={videoRef}
          // width="600"
          height={250}
          autoPlay
          // muted
          loop
          // controls
          // onEnded={() => setIsPlaying(false)}
        >
          <source src={static_URL + "banner.MP4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
