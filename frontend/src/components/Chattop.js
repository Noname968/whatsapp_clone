import React from 'react'
import './Chattop.css'
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from '../Stateprovider';
import LogoutIcon from '@mui/icons-material/Logout';

function Chattop({messages,signout}) {
    const [{user},dispatch] = useStateValue();

    return (
        <div className='chattop'>
            <div className="topl">
            <Avatar src="https://play-lh.googleusercontent.com/6q4uhZs928RVXstL4YRU2syGOA4VKeEmWh1Ij-HosyUgEJkZwGWK_YQ6eC4BirG-SPMt"/>
            <div className="tl">
                <p className='cp'>Friends</p>
                <p className='cpi'>Last seen at {messages[messages.length-1]?.timestamp}</p>
            </div>
            </div>
            <div className="topr">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <LogoutIcon  onClick={signout} />
                </IconButton>
            </div>
        </div>
    )
}

export default Chattop
