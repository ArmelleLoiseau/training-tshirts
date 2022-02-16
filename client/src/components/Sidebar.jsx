import React from 'react'
import Reset from './sidebar/Reset'
import Range from './sidebar/Range'
import Brands from './sidebar/brands'
import Colors from './sidebar/colors'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Reset />
    <Range />
    <Brands />
    <Colors />
    </div>
  )
}

export default Sidebar