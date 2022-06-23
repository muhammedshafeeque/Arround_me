import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import * as EmailValidator from 'email-validator';
import axios from '../../../Api/Axios'
import { useNavigate } from "react-router-dom";
import { Store } from "../../../Context/Store";
function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fname, setFName] = useState();
  const [lname, setLname] = useState();
  const [Password, setPassword] = useState();
  const [email, setEmail] = useState();
  const toast=useToast()
  const navigate=useNavigate()
  const {setUser}=Store()
const handleSignup=async()=>{
  if(!fname||!lname||!Password||!email){
    toast({
      title: 'Error',
      description: "All Fields Reqierd",
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }else{
    if(EmailValidator.validate(email)){
      let {data}= await axios.post('/api/auth/signup',{fname,lname,Password,email})
      if(data.error){
        toast({
          title: 'Error',
          description: data.error,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }else{
        setUser(data)
        localStorage.setItem('token',JSON.stringify(data.token))
        navigate('/home')
        toast({
          title: 'Success',
          description:data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })

      }
    }else{
      toast({
        title: 'Error',
        description: "Pleas Enter a Valid Email Address",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }
}
  return (
    <div>
      <Text onClick={onOpen}>Signup</Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Signup</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box pl={10}>
              <Text mt={3}>First Name</Text>
              <Input
                onChange={(e) => {
                  setFName(e.target.value);
                }}
                placeholder="First name ..."
                width="90%"
              />
              <Text mt={3}>Last Name</Text>
              <Input
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                placeholder="Last name ..."
                width="90%"
              />
              <Text mt={3}>Email</Text>
              <Input
                width="90%"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="example@example.com"
              />
              <Text mt={3}>Password</Text>
              <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                width="90%"
                type={"password"}
              />
              <Button onClick={handleSignup} mt={5} width={"90%"} colorScheme="blue">
                Signup
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Signup;
