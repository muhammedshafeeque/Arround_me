import {  Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'
import WritePost from '../miscellaneous/Model/Post/WritePost'
import Post from '../miscellaneous/Post/Post'
import './fedd.scss'
function NewsFeed() {
  return (
    <div  className='news_feed'>
        <Box  className='write_post'>
        <Avatar position={'static'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        
          <Box className='input_div'>
          <WritePost width={"100%"}>
            <p>Write a post </p>
            </WritePost>
          </Box>
          
        </Box>
        <Text textAlign={'center'}>News Feed</Text>
        <Box width={'100%'}  >
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    </div>
  )
}

export default NewsFeed