import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Api/Axios";

const StoreContext = createContext();
const ArrountProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [config, setConfig] = useState();
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      let token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        let configs = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        axios.get("/api/user/user-details", configs).then((res) => {
          if (res.data.error) {
            localStorage.removeItem("token");
            navigate("/");
          } else {
            setUser(res.data);
            axios.get("/api/user/userData", configs).then((res) => {
              setUserData(res.data);
            });
            navigate("/home");
          }
        });
      }
    } else {
      setConfig({
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      navigate("/home");
    }
  }, [user, setUser, navigate]);
  return (
    <StoreContext.Provider
      value={{ user, setUser, config, userData, setUserData }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default ArrountProvider;
export const Store = () => {
  return useContext(StoreContext);
};
