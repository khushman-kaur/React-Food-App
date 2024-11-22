import { LOGO_URL } from "../../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStat = useOnlineStatus();

  const data = useContext(UserContext);
  //console.log(data.loggedInUser);

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  //console.log(cartItems);

  //

  return (
    <div className="flex justify-between shadow-xl">
      <div className="w-40">
        <img className=" w-35" src={LOGO_URL}></img>
      </div>
      <div className="nav-items  m-8 ">
        <ul className="flex items-center">
          <li className=" text-lg">
            Online Status :{onlineStat ? "🟢" : "🔴"}
          </li>
          <li className="  text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className=" text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" text-lg" onClick={() => {}}>
            <Link to="/cart">Cart:{cartItems.length}</Link>
          </li>

          <li className=" text-lg">
            <button
              className="mt-2.5 login"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className=" text-base font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
