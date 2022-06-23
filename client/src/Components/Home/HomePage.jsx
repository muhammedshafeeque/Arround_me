import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import "./Home.scss";
import {FaRegNewspaper,FaStore} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {GrUserWorker} from 'react-icons/gr'
import {ImOffice} from 'react-icons/im'
import {GrBus} from 'react-icons/gr'
import {BiDonateBlood} from  'react-icons/bi'
import NewsFeed from "../News Feed/NewsFeed";
function HomePage() {
  return (
    <Box className="home_body">
      {!isMobile && <Box width={"25%"}></Box>}
      <Box className="center_part" width={isMobile ? "100%" : "50%"}>
        
          <Tabs width={'100%'} colorScheme={'purple'}>
            <TabList width={isMobile ? "100%" : "50%"} top={'4.23rem'} left={isMobile?0:"25%"} backgroundColor={"#c8ccc9"} position={'fixed'} >
              <Tab fontSize={'30px'} color={'#410074'} width={'14.29%'} ><FaRegNewspaper/></Tab>
              <Tab fontSize={'30px'} color={'#410074'} width={'14.29%'}><MdWork/></Tab>
              <Tab fontSize={'30px'} color={'#410074'} width={'14.29%'}><GrUserWorker/></Tab>
              <Tab fontSize={'30px'} color={'#410074'} width={'14.29%'}><FaStore/></Tab>
              <Tab fontSize={'30px'} color={'#410074'} width={'14.29%'}><ImOffice/></Tab>
              <Tab fontSize={'30px'} color={'#410074'} width={'14.29%'}><GrBus/></Tab>
              <Tab fontSize={'30px'}  color={'#410074'} width={'14.29%'}><BiDonateBlood/></Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <NewsFeed/>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
     
      </Box>
      {!isMobile && <Box width={"25%"}></Box>}
    </Box>
  );
}

export default HomePage;
