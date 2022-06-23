import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Store } from '../../../Context/Store'
import Signup from '../../Auth/Signup/Signup'
import Profile from '../Model/Profile/Profile'
import './Header.scss'
function Header() {
  const {user}=Store()
  return (
    <Box className='header' >
      <Text fontSize={'xx-large'}  >Arrount Me</Text>
      <div></div>
      {user?<Profile/>:<Signup/>}
      
    </Box>
  )
}

export default Header