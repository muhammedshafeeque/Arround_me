import {  Box, Text } from '@chakra-ui/react'
import React from 'react'
import Post from '../miscellaneous/Post/Post'
import './fedd.scss'
function NewsFeed() {
  return (
    <div  className='news_feed'>
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