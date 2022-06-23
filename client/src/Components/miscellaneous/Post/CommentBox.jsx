import { Box } from '@chakra-ui/react'
import React from 'react'
import {MdSend} from 'react-icons/md'
import Comment from './Comment'
function CommentBox() {
  return (
    <Box width={'100%'} padding="10px">
        <Box display={'flex'} justifyContent={'space-between'}>
        <textarea rows='1' cols="10" wrap="soft" className='comment_input' placeholder='Write a Comment' type="text" />
        <MdSend fontSize={'30px'} />
        </Box>
        <Box mt={3}>
            <Comment/>
        </Box>
    </Box>
  )
}

export default CommentBox