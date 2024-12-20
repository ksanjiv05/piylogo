// import { createEffect } from "solid-js";
// import { API_URL, static_URL } from "../../config/config";

// import axios from "axios";
// const Banner = () => {
//   let videoRef; // Reference for the video element

//   // Effect to handle video playback
//   createEffect(() => {
//     if (videoRef) {
//       videoRef.play(); // Start playing the video as soon as it's ready
//     }
//   });
//   return (
//     <div class="w-full md:h-[90vh] h-[50vw]  mb-[30px]">
//       <div class="w-full md:h-[90vh] h-[50vw] rounded-[20px] mt-[30px] overflow-hidden ">
//         <video
//           ref={videoRef}
//           // width="600"
//           height={250}
//           autoPlay
//           muted
//           loop
//           // controls
//           // onEnded={() => setIsPlaying(false)}
//         >
//           <source src={static_URL + "banner.MP4"} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import { createEffect } from "solid-js";
import { API_URL, static_URL } from "../../config/config";
import axios from "axios";

const Banner = () => {
  let videoRef; // Reference for the video element

  // Attempt to start playing the video as soon as the component loads
  createEffect(() => {
    if (videoRef) {
      // On iOS Safari, if all the correct attributes are set,
      // the video should autoplay without calling play() programmatically.
      // But if needed, you can still attempt it here:
      const playPromise = videoRef.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  });

  return (
    <div class="w-full md:h-[90vh] h-[50vw] mb-[30px]">
      <div class="w-full md:h-[90vh] h-[50vw] rounded-[20px] mt-[30px] overflow-hidden">
        <video
          ref={videoRef}
          height={250}
          autoPlay
          muted
          loop
          playsinline
          webkit-playsinline
        >
          <source src={static_URL + "banner.MP4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
