import React from 'react'
import Sidetop from '../components/Sidetop'
import Channels from './Channels'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Sidetop/>
        <Channels/>
    </div>
  )
}

export default Sidebar
