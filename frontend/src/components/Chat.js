import React from 'react'
import config, { ActionProvider, MessageParser } from './ChatConfig'
import Chatbot from 'react-chatbot-kit'

const Chat = () => {
  return (
    <div className='chatbot'>
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />  
    </div>
  )
}

export default Chat
