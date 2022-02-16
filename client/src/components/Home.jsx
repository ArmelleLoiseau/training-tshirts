import React, {useState} from 'react'


// import compoments
import Sidebar from './Sidebar'
import List from './List'

const Home = () => {
  return (
   <div className='home'>
   <Sidebar />
   <List />
   </div>
  )
}

export default Home