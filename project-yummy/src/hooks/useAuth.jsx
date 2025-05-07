import { useDispatch, useSelector } from "react-redux";
import { setUserFromLocalStorage } from "../slices/authSlice";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.user.isAuth);

  // Dong bo localStorage voi store => load lai trang
  useEffect(() => {

    // lay thong tin luu trong localStorage 
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      // console.log("parsedUser", parsedUser);

      dispatch(setUserFromLocalStorage(parsedUser));
    }
  }, []);

  return isAuthenticated || !!localStorage.getItem("user");
};