import React, { useState, useEffect, useRef } from 'react'
import './Chat.css'
import { Avatar, IconButton, Tooltip } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SendIcon from '@material-ui/icons/Send';
import axios from './axios'
import { useStateValue } from './ContextApi/StateProvider';

function Chat({messages}) {
    const [{ user,room,roomVar }, dispatch] = useStateValue();
    const [input, setInput] = useState("");

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post(('/chats/' + room ),{
            message: input,
            author: {
                name: user.displayName,
                uid : user.uid
            }
    
        });

        setInput('');
    }

    return (
        <div className="chat" >
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${roomVar.creator.uid}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>{roomVar.name ? roomVar.name : "something"}</h3>
                    <p>created by {roomVar.creator.name && roomVar.creator.name}</p>
                </div>

                <div className="chat__headerRight">

                </div>

            </div>

            <div className="chat__body" >

                {messages.map((message)=> (
                    < React.Fragment key={message._id}>
                    <p key={message._id} className={`chat__message ${user.uid===message.author.uid && "chat__reciever"}`} > 
                    <span className="chat__name" >
                        {message.author.name}
                    </span>
                    
                    {message.message}
                    
                    <span className="chat__timestamp" >
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(Date.parse(message.updatedAt)))}
                        {/* {message.updatedAt} */}
                    </span>
                    </p>
                    </React.Fragment>
                ))};

                <div ref={messagesEndRef}></div>
            
            </div>

            <div className="chat__footer">
                <IconButton>
                <InsertEmoticonIcon />
                </IconButton>
                
                <form onSubmit={sendMessage}>
                    <input value={input} 
                    onChange={e => setInput(e.target.value)}
                    required
                    type="text" placeholder="Type a message"/>
                    <button className="chat__footer__send"
                    type="submit">
                            <Tooltip title="Send">
                            <SendIcon /> 
                            </Tooltip>
                            </button>
                </form>

            </div>

        </div>
    )
}

export default Chat
