import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.card.info.defaultPrice
        ? item.card.info.defaultPrice / 100
        : item.card.info.finalPrice
        ? item.card.info.finalPrice / 100
        : item.card.info.price / 100;
      return total + price;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="bg-sky-200 rounded-md m-4 p-3 font-bold text-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div>
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 mx-28 border-gray-400 border-b-2 bg-lime-200 text-center"
          >
            <div className="py-2">
              <span className="font-bold">{item.card.info.name} - </span>
              <span className="font-bold">
                ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.finalPrice
                  ? item.card.info.finalPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="font-bold text-xl ">
        Total:
        {cartItems.length !== 0 ? (
          <span>₹{totalPrice}</span>
        ) : (
          " No items in cart"
        )}
      </div>
    </div>
  );
};

export default Cart;
