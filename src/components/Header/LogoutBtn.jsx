import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth"; // might change '../../appwrite/config
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the logged-in user's details
    authService.getCurrentuser().then((userData) => {
      if (userData) {
        setUser(userData);
      }
    });
  }, []);

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-600 hover:bg-blue-200 rounded-full"
      onClick={logoutHandler}
    >
      {user ? user.name : "Loading..."}
    </button>
  );
}

export default LogoutBtn;
