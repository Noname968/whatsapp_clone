import React from 'react'
import './Sidetop.css'
import PeopleIcon from '@mui/icons-material/People';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';
import { useStateValue } from '../Stateprovider'

function Sidetop() {
    const [{user},dispatch] = useStateValue();

    return (
        <div className='sidetp'>
            <div className="top">
                <Avatar src={user?.photoURL}/>
                <div className="topr">
                    <IconButton>
                        <PeopleIcon className='i'/>
                    </IconButton>
                    <IconButton >
                        <DonutLargeOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon className='i'/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="bottom">
                <div className="searchb">
                    <Search/>
                    <input type="text" name="" id="" placeholder='Search or start new chat' className='inputs'/>
                </div>
            </div>
        </div>
    )
}

export default Sidetop
