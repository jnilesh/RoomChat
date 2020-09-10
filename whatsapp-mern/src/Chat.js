import React, { useState } from 'react'
import './Chat.css'
import { Avatar } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SendIcon from '@material-ui/icons/Send';
import axios from './axios'
import { useStateValue } from './ContextApi/StateProvider';

function Chat({messages}) {
    const [{ user,room,roomVar }, dispatch] = useStateValue();
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post(('/chats/' + room ),{
            message: input,
            name: user.displayName,
            author: user.uid
    
        });

        setInput('');
    }

    return (
        <div className="chat" >
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>{roomVar.name ? roomVar.name : "something"}</h3>
                    <p>created by {roomVar.creator && roomVar.creator}</p>
                </div>

                <div className="chat__headerRight">

                </div>

            </div>

            <div className="chat__body">

                {messages.map((message)=> (
                    <p key={message._id} className={`chat__message ${user.displayName===message.name && "chat__reciever"}`} > 
                    <span className="chat__name" >
                        {message.name}
                    </span>
                    
                    {message.message}
                    
                    <span className="chat__timestamp" >
                        {message.updatedAt}
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
