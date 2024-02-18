import { useContext } from "react";
import TrailerAudioContext from "../context/TrailerAudioContext";

const VideoTitle = ({ title, overview }) => {
  const audio = useContext(TrailerAudioContext);

  const handleAudioClick = () => {
    audio.setMuteAudio((muteAudio) => 1 - muteAudio);
  };

  return (
    <div className="absolute aspect-video w-screen bg-gradient-to-tr from-black px-6 pt-[17%] text-white md:px-24">
      <h1 className="text-2xl font-bold md:text-6xl">{title}</h1>
      <p className="hidden w-1/4 py-6 text-lg sm:w-11/12 sm:text-base md:inline-block md:text-lg lg:w-1/4">
        {overview}
      </p>
      <div className="my-4 md:m-0">
        <button
          className="rounded-lg bg-white px-2 py-1 text-xl text-black duration-150 hover:bg-opacity-85 md:px-12 md:py-4"
          onClick={handleAudioClick}
        >
          {audio.muteAudio === 1 ? "Play Audio" : "Mute Audio"}
        </button>
        <button className="mx-2 hidden rounded-lg bg-gray-500 bg-opacity-50 px-3 py-2 text-xl text-white duration-150 hover:bg-gray-600 md:inline-block md:px-12 md:py-4">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
