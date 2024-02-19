import ReactPlayer from "react-player";

const VideoPalyer = ({ keys }) => {
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${keys}`}
        controls
        width="100%"
        // height="100%"
        playing={true}
      />
    </div>
  );
};

export default VideoPalyer;
