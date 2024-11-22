import { useDispatch } from "react-redux";
import { IMG_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const ItemList = (props) => {
  const { data } = props;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {data?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 bg-lime-200 text-left flex  justify-between"
        >
          <div className="py-2 flex-col mr-8 ">
            <span className="font-bold">{item.card.info.name} - </span>
            <span className="font-bold">
              ₹
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.finalPrice
                ? item.card.info.finalPrice / 100
                : item.card.info.price / 100}
            </span>
            <p className="text-xs text-gray-700">
              {item.card.info.description}
            </p>
          </div>
          <div>
            {item.card.info.imageId ? (
              <div className="absolute mx-14 my-8">
                <button
                  type="button"
                  className="py-2.5 px-6  text-sm font-extrabold text-white focus:outline-none bg-neutral-500 bg-opacity-40 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  onClick={() => handleAddItem(item)}
                >
                  ADD+
                </button>
              </div>
            ) : (
              <div className="mx-6">
                <button className=" py-2.5 px-5 me-2 mb-2 text-sm font-extrabold text-white focus:outline-none bg-neutral-500 bg-opacity-40 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                  ADD+
                </button>
              </div>
            )}
            {item.card.info.imageId ? (
              <img
                className=" w-60 max-w-none "
                src={IMG_URL + item.card.info.imageId}
              ></img>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
