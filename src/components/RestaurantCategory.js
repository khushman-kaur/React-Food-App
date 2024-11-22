import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  
  const handleAccordion = () => {
    setShowIndex();
  };

  return (
    <div className="flex-col  p-4 shadow-xl mx-auto my-4 w-7/12 rounded-md">
      <div className="flex justify-between mx-2  " onClick={handleAccordion}>
        <span className="font-bold text-base">
          {data?.title} (
          {Array.isArray(data?.itemCards) ? data.itemCards.length : 0})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ItemList data={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
