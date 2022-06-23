import { Avatar, Box} from '@chakra-ui/react'
import React from 'react'
import './post.scss'
function Comment() {
  return (
    <Box className='comment'>
        <Box display={'flex'}><Avatar
          position={'static'}
            size="sm"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        <p className='comment_header'>Johns</p></Box>
        
        <p className='comment_body' >Nmahj</p>
    </Box>
  )
}

export default Comment