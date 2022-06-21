import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Signup from '../../Auth/Signup/Signup'
import './Header.scss'
function Header() {
  return (
    <Box className='header' >
      <Text fontSize={'xx-large'}  >Arrount Me</Text>
      <div></div>
      <Signup/>
    </Box>
  )
}

export default Header