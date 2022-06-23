import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { Store } from "../../../../Context/Store";

function Profile() {
  const { user, setUser } = Store();
  const navigate = useNavigate();
  const manageLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <Menu isLazy>
        <MenuButton>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!isMobile && (
              <>
                <Text>{user.user.fname.toUpperCase()}</Text>
                <Text ml={3}>{user.user.lname.toUpperCase()}</Text>
              </>
            )}
            <Avatar
              ml={3}
              name={user.user.fname}
              src="https://bit.ly/dan-abramov"
            />
          </span>
        </MenuButton>
        <MenuList>
          <MenuItem color={"black"}>Profile</MenuItem>
          <MenuItem color={"black"}>Settings</MenuItem>
          <MenuItem onClick={manageLogout} color={"black"}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Profile;
