import { MENU_API, MENU_API_LAST } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId + MENU_API_LAST);
      const jsonData = await data.json();
      //console.log(jsonData.data);
      setResInfo(jsonData.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
