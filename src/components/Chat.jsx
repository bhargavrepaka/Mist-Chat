import React from 'react'
import Add from '../img/add.png'
import Cam from '../img/cam.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'
import {useChat} from '../context/ChatContext'

const Chat = () => {
  const {data}=useChat()
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Add} alt="" />
          <img src={Cam} alt="" />
          <img src={More}alt="" />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  )
}

export default Chat