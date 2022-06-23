import { Box, Button, Img, Input, Text, useToast } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/miscellaneous/Header/Header";
import "./login.scss";
import wallpaperImage from "../../Asset/Images/wall_post.png";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import axios from "../../Api/Axios";
import { Store } from "../../Context/Store";
import { useNavigate } from "react-router-dom";
function LoginPages() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();
  const { setUser } = Store();
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "error",
        description: "Email and Password Must be Enter",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      let { data } = await axios.post("/api/auth/login", { email, password });
      if (data.error) {
        toast({
          title: "error",
          description: data.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        setUser(data);
        localStorage.setItem("token", JSON.stringify(data.token));
        navigate("/home");
      }
    }
  };
  return (
    <div>
      <Header />
      <Box mt={20} className="login_body">
        {!isMobile && (
          <Box className="left_banner" width={"60%"}>
            <Text>Open Your Face Into Your Locality</Text>
            <Img src={wallpaperImage} />
          </Box>
        )}

        <Box
          className=""
          width={isMobile ? "100%" : "40%"}
          padding={isMobile ? 10 : 20}
        >
          <Text textAlign={"center"} fontSize="20px">
            Login
          </Text>
          <Text mt={5}>Email</Text>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email.."
          />
          <Text mt={2}>Password</Text>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            type={'password'}
          />
          <Button
            onClick={handleLogin}
            colorScheme={"blue"}
            mt={5}
            width={"100%"}
          >
            Login
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default LoginPages;
