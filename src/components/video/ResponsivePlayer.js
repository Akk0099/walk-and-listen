import React from "react";
import ReactPlayer from "react-player";
import "./responsive-player.css";

const ResponsivePlayer = ({ playing, volume, playbackRate, muted, video }) => {
  console.log(video)
  return (
    <ReactPlayer
      className="react-player"
      url={video}
      width="100%"
      height="100%"
      volume={volume / 100}
      playbackRate={playbackRate}
      muted={muted}
      playing={playing}
    />
  );
};

export default ResponsivePlayer;
