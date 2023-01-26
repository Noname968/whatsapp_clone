import { Avatar } from '@mui/material'
import React from 'react'
import './Sidechat.css'

function Sidechat() {

  return (
    <div className='sidechat'>
      <Avatar className='cimg' sx={{ width: 49, height: 49 }} src="https://play-lh.googleusercontent.com/6q4uhZs928RVXstL4YRU2syGOA4VKeEmWh1Ij-HosyUgEJkZwGWK_YQ6eC4BirG-SPMt"/>
      <div className="tll">
        <p className='cpl'>Friends</p>
        <p className='cpil'>click here to message</p>
      </div>
    </div>
  )
}

export default Sidechat
