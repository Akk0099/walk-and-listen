import React, { useState } from "react";
import "./styles.css";
import ResponsivePlayer from "./components/video/ResponsivePlayer";
import SideBar from "./components/sidebar/SideBar";
import Button from "./components/button/MyButton";
import options from "./data";

export default function App() {

  const [sideBar, setSideBar] = useState(true);
  const [muted, setMuted] = React.useState(false);
  const [playbackRate, setPlaybackRate] = React.useState(1);
  const [volume, setVolume] = React.useState(30);
  const [option, setOption] = React.useState(options[0]);
  const [playing, setPlaying] = useState(false);



  const toggleDrawer = () => {
    if (sideBar) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  };

  return (
    <div className="app">
      <Button onClick={toggleDrawer} />
      {sideBar && <SideBar playing={playing} setPlaying={setPlaying} options={options} option={option} setOption={setOption} volume={volume} setVolume={setVolume} playbackRate={playbackRate} setPlaybackRate={setPlaybackRate} muted={muted} setMuted={setMuted} />}
      <ResponsivePlayer playing={playing} volume={volume} playbackRate={playbackRate} muted={muted} video={option.video} />
    </div>
  );
}
