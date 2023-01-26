import React, { useEffect, useState } from 'react'
import Chatroom from './pages/Chatroom'
import Sidebar from './pages/Sidebar'
import './App.css'
import Login from './pages/Login';
import { useStateValue } from './Stateprovider';
import { actionTypes } from './reducer';
import { auth } from './firebase';

function App() {
  const [localeuser, setlocaleuser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_USER,
      user: localeuser,
    })
  }, [])

  const signout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      window.location.reload(false);
    })
  }

  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='app'>
      {!user ? <Login /> : (
        <div className="appcon">
          <Sidebar />
          <Chatroom signout={signout}/>
        </div>
      )}
    </div>
  )
}

export default App
