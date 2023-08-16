import React from 'react';
import config, { ActionProvider, MessageParser } from './ChatConfig';
import Chatbot from 'react-chatbot-kit';

const Chat = (props) => {

    const isopen = props.open;
    console.log(isopen);

    return (
        isopen ? (   // isopenがtrueの場合のみ表示
            <div className='chatbot'>
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />  
            </div>
        ) : null  // isopenがfalseの場合はnullを返して何も表示しない
    );
}

export default Chat;
