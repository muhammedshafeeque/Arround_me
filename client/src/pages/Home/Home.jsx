import React, { useEffect } from 'react'
import { useState } from 'react'
import HomePage from '../../Components/Home/HomePage'
import Otp from '../../Components/Home/Otp'
import Header from '../../Components/miscellaneous/Header/Header'
import { Store } from '../../Context/Store'
import './Home.scss'
import axios from '../../Api/Axios'
function Home() {
  const {userData,setUserData,config}=Store()
  const [refresh,setRefresh]=useState()
  useEffect(()=>{
    axios.get("/api/user/userData", config).then((res) => {
      setUserData(res.data);
    });
  },[userData,refresh,setUserData,config])
  return (
    <div className='home'>
      <Header/>
      {userData&&userData.status==="inactive"?<Otp refresh={setRefresh}/>:<HomePage/>}
  

    </div>
  )
}

export default Home