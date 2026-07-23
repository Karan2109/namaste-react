import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  // console.log("Header Rendered")

  useEffect(() => {
    // console.log("useEffect Called")
  }, []);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-26" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-6 p-4 m-4">
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
