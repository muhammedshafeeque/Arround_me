import { Box, Button, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './Home.scss'
import axios from '../../Api/Axios'
import { Store } from '../../Context/Store'
function Otp({refresh}) {
    const {config}=Store()
    const [loading,setLoading]=useState(false)
    const [otp,setOtp]=useState()
    const toast=useToast()

    const sendOtp=async()=>{
        setLoading(true)
        await axios.get('/api/user/sentotp',config)
        setLoading(false)
    }
    useEffect(()=>{
        setLoading(true)
        axios.get('/api/user/sentotp',config).then(()=>{
            setLoading(false)
        })
        
    },[config])
    const handleVerifyOtp=async()=>{
        if(!otp||otp.length<6){
            toast({
                title: 'Error',
                description: "Pleas Ender Your 6 Digit One Time Password ",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
        }else{
            setLoading(true)
           let {data}=await axios.get(`/api/user/verifyOtp/${otp}`,config)
           if(data.error){
            toast({
                title: 'Error',
                description: data.error,
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
           }else{
            refresh()

           }
           setLoading(false)
        }
    }
  return (
    <div className='otp'>
        <Text className='text_heder' >Verify Email </Text>
        <Box maxWidth={'xl'} mt={10} className='otp_area'>
            <p>Pleas Enter the six digit  Code Which We sent  To Your Email Address </p>
            <Input mt={3} type={'number'} onChange={(e)=>{setOtp(e.target.value)}} max={6}/>
            <Button isLoading={loading} width={"100%"} onClick={handleVerifyOtp} mt={5} colorScheme="blue">Verify</Button>
            <Text onClick={sendOtp} cursor={"pointer"} color={'blue'} >Resent OTP</Text>
        </Box>
    </div>
  )
}

export default Otp