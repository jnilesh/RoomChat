import React, { useState } from 'react'
import './Chat.css'
import { Avatar } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SendIcon from '@material-ui/icons/Send';
import axios from './axios'
import { useStateValue } from './ContextApi/StateProvider';

function Chat({messages}) {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new',{
            message: input,
            name: user.displayName,
            timestamp: new Date().toLocaleString(),
            received: true,
    
        });

        setInput('');
    }

    return (
        <div className="chat" >
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">

                </div>

            </div>

            <div className="chat__body">

                {messages.map((message)=> (
                    <p className={`chat__message ${user.displayName==message.name && "chat__reciever"}`} > 
                    <span className="chat__name" >
                        {message.name}
                    </span>
                    
                    {message.message}
                    
                    <span className="chat__timestamp" >
                        {message.timestamp}
                    </span>
                    </p>
                ))}

            
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} 
                    onChange={e => setInput(e.target.value)}
                    type="text" placeholder="Type a message"/>
                    <button 
                    // onClick={sendMessage} 
                    onClick={sendMessage}
                    type="submit">
                        {/* <IconButton >  */}
                            <SendIcon /> 
                            {/* </IconButton> */}
                            </button>


                </form>

            </div>

        </div>
    )
}

export default Chat
