import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SendIcon from '@material-ui/icons/Send';

function Chat() {
    return (
        <div class="chat" >
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
                <p className="chat__message" > 
                    <span className="chat__name" >
                        Name
                    </span>
                    
                    This is a message
                    
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message chat__reciever" > 
                    <span className="chat__name" >
                        Name
                    </span>
                    
                    This is a message
                    
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                    </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button 
                    // onClick={sendMessage} 
                    type="submit">
                        <IconButton > <SendIcon /> </IconButton></button>


                </form>

            </div>

        </div>
    )
}

export default Chat
