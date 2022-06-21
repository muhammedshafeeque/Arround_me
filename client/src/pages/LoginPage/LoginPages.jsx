import { Box, Button, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../../Components/miscellaneous/Header/Header'
import './login.scss'
import wallpaperImage from '../../Asset/Images/wall_post.png'
import {isMobile} from 'react-device-detect';
function LoginPages() {
  return (
    <div><Header/>
    <Box mt={20} className='login_body'>
      {!isMobile&&<Box className='left_banner' width={"60%"} >
      <Text>Open Your Face Into Your Locality</Text>
        <Img  src={wallpaperImage}/>
       
      </Box>}
      
      <Box className='' width={isMobile?"100%":"40%"} padding={isMobile?10:20} >
        <Text textAlign={'center'}  fontSize='20px' >Login</Text>
        <Text mt={5}  >Email</Text>
        <Input placeholder='Enter Your Email..'/>
        <Text mt={2} >Password</Text>
        <Input placeholder='Password' />
        <Button colorScheme={'blue'} mt={5} width={'100%'} >Login</Button>
      </Box>
    </Box>
    </div>
  )
}

export default LoginPages