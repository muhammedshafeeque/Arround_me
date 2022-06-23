import { Avatar, Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import "./post.scss";
import {GrLike} from 'react-icons/gr'
import {BiCommentDetail} from 'react-icons/bi'
import {FiSend} from 'react-icons/fi'
function Post() {
  return (
    <Box className="post">
      <Box className="post_header">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text>Scope : Global</Text>
        </Box>
        <Box className="sender">
          <Avatar
          position={'static'}
            size="sm"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Text ml={3}>sample Posted in Example</Text>
        </Box>
      </Box>
      <Box className="post_body">
        <Img
          width={"100%"}
          src="https://wallpaperaccess.com/full/1335039.jpg"
        />
        <Text
          textOverflow={"ellipsis"}
          maxHeight={"5rem"}
          overflow={"hidden"}
          padding={"5px"}
        >
          xt ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popula
        </Text>
      </Box>
      <Box className="post_footer">
        <Box className="footer_icons">
            <span> <h2>0</h2> <GrLike  fontSize={"22px"} /> </span>
            <span>  <h2>0</h2> <BiCommentDetail fontSize={"22px"}/></span>
            <span> <h2>0</h2><FiSend fontSize={"22px"}/></span>
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
