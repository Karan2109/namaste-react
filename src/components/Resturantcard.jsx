const Resturantcard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData;

  return (
    <div className="m-4 p-4 w-62 bg-gray-100">
      <img
        className="rounded-xl py-4"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt={name}
      />

      <h3 className="font-bold text-orange-400 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default Resturantcard;
