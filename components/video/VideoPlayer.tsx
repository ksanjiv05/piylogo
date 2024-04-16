"use client";
import React from "react";
import ReactPlayer from "react-player";
// import v from "@/app/resources/video/Art.mp4";

const VideoPlayer = (src) => {
  

  return (
    <div>
      <video
        width="100%"
        height="100%"
        src={require("@/app/resources/video/Art.mp4")}
        autoPlay
      >
      <source src={require("@/app/resources/video/Art.mp4")} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;