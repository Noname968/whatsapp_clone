import React, { useEffect, useState } from 'react'
import Chat from '../components/Chat'
import Chatbottom from '../components/Chatbottom'
import Chattop from '../components/Chattop'
import './Chatroom.css'
import Pusher from 'pusher-js'
import axios from 'axios'


function Chatroom({signout}) {
  const [messages, setmessages] = useState([])
  const url = "http://localhost:5000"
  
  useEffect(() => {
    axios.get(`${url}/getmessages`)
      .then(response => {
        // console.log(response.data);
        setmessages(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    var pusher = new Pusher('671fcdeb962ef63a75d6', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      setmessages([...messages, data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])

  console.log(messages)
  return (
    <div className='chatroom'>
      <Chattop messages={messages} signout={signout}/>
      <Chat messages={messages}/>
      <Chatbottom />
    </div>
  )
}

export default Chatroom
