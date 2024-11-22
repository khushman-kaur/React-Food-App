import { CDN_URL } from "../../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, costForTwo, avgRatingString, sla } = resData?.info;

  return (
    <div className="flex-row-reverse w-48 items-center justify-center">
      <img
        className="w-45 h-50 mx-2 mt-2 rounded-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="font-bold  break-words pl-4">{name}</h3>
      <p className="break-words pl-4">{cuisines.join(", ")}</p>
      <p className="font-semibold pl-4">{costForTwo}</p>
      <p className="font-semibold pl-4">{avgRatingString} Stars</p>
      <p className=" pl-4">{sla.deliveryTime} minutes</p>
    </div>
  );
};

export const enhancedResCard = (ResCard) => {
  return (props) => {
    // const { header, subHeader } =
    //   props?.resData?.info?.aggregatedDiscountInfoV3;
    //console.log(props);
    return (
      <div>
        <label className="font-semibold absolute bg-orange-200 ml-2 p-1 rounded-lg">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
