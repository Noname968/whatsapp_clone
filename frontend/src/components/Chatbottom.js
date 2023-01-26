import React, { useState } from 'react'
import './Chatbottom.css'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import { IconButton } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import axios from 'axios'
import { useStateValue } from '../Stateprovider'
import EmojiPicker from 'emoji-picker-react';

function Chatbottom() {
  const [input, setinput] = useState("")
  const [{ user }, dispatch] = useStateValue();
  const [emojiopen, setemojiopen] = useState(false)
  const url = "http://localhost:5000"

  const clickfun = async (e) => {
    e.preventDefault()
    await axios.post(`${url}/messagesnew`, {
      message: input,
      name: user.displayName,
      timestamp: (new Date().toLocaleString('en-AU').split(',')[1]).slice(0, -6) + " " + (new Date().toLocaleString('en-AU').split(' ')[2]),
      received: false,
    })
    setinput('')
  }

  return (
    <div className='c'>
      <form action="" className='chatbtm'>
        {emojiopen && (
          <div className="emoji-picker-react">
            <EmojiPicker height={300} width="100%" previewConfig={{ "showPreview": false }} onEmojiClick={(event,emojiData)=>{setinput(input+event.emoji)}}/>
          </div>
        )}
        <IconButton>
          <EmojiEmotionsOutlinedIcon sx={{ width: 28, height: 28 }} onClick={()=>{setemojiopen(!emojiopen)}} />
        </IconButton>
        <IconButton>
          <AttachmentOutlinedIcon sx={{ width: 28, height: 28 }} className="clip" />
        </IconButton>
        <input type="text" value={input} onChange={(e) => setinput(e.target.value)} name="" id="" className='btmtext' placeholder='Type a message' />
        <button type='submit' className='b' onClick={clickfun}>Submit</button>
        <IconButton>
          <KeyboardVoiceIcon sx={{ width: 28, height: 28 }} />
        </IconButton>
      </form>
    </div>
  )
}

export default Chatbottom
