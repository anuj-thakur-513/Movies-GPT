import { useContext } from "react";
import { TrailerAudioContext } from "../utils/TrailerAudioContext";

const VideoTitle = ({ title, overview }) => {
  const audio = useContext(TrailerAudioContext);

  const handleAudioClick = () => {
    audio.setMuteAudio((muteAudio) => 1 - muteAudio);
  };

  return (
    <div className="pt-[17%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button
          className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-85 duration-150"
          onClick={handleAudioClick}
        >
          {audio.muteAudio === 1 ? "Play Audio" : "Mute Audio"}
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-gray-600 duration-150">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
