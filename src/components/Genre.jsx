const Genre = ({ genre }) => {
  return (
    <div className="mr-2 flex items-center rounded-md bg-cyan-700 px-3 py-2 text-xs ">
      <h3>{genre}</h3>
    </div>
  );
};

export default Genre;
