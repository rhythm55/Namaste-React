const RestrauntList = (props) => {
  const restrauntList = props.restrauntList;
  return (
    <div className="card-container">
      {restrauntList.map((restraunt) => {
        return <RestrauntCard key={restraunt.data.id} {...restraunt.data} />;
      })}
    </div>
  );
};

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <p>{cuisines?.join(", ")}</p>
      <span>
        <p>rating {avgRating}</p>
        <p>{deliveryTime} min</p>
        <p>{costForTwoString}</p>
      </span>
      <p></p>
    </div>
  );
};

export default RestrauntList;
