import { TMDB_IMAGE_URL } from "../utils/constants";

const CastCard = ({ img_path, name, character }) => {
  return (
    <div className="m-3 w-32 rounded-xl text-white shadow-lg md:w-44">
      <div className="w-[100px] md:w-[120px] ">
        {img_path !== null ? (
          <img
            className="rounded-t-lg object-cover"
            src={TMDB_IMAGE_URL + img_path}
            alt="cast-img"
            loading="lazy"
          />
        ) : (
          <img
            className="rounded-t-lg object-cover"
            src="/assets/avatar.png"
            alt="cast-img"
          />
        )}
      </div>
      <div className="px-1 pb-2">
        <h3 className="text-lg font-semibold md:pl-2">{name}</h3>
        <p className="text-sm md:pl-2">{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
