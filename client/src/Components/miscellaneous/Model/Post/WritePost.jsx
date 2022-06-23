import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { BsCardImage } from "react-icons/bs";
import { MdVideocam } from "react-icons/md";
function WritePost({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <span onClick={onOpen}>{children}</span>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box display={"flex"}>
              <Select width={"30%"}>
                <option value="global">Global</option>
              </Select>
              <Select width={"30%"}>
                <option value="public">Public</option>
                <option value="privet">Privet</option>
              </Select>
            </Box>

            <p>Your Post Will be shown in your profile </p>
            <Textarea placeholder="Write Your Post..." mt={3} />

            <Box fontSize={"25px"} mt={3} display={"flex"}>
              <Text marginRight={3}>
                <BsCardImage />
              </Text>

              <MdVideocam />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default WritePost;
