import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
import { useStateValue } from "./ContextApi/StateProvider";
import { actionTypes } from "./ContextApi/reducer";

function SidebarChat({ fullRoom,name,description,id }) {

    const [{ room }, dispatch] = useStateValue();

    const [seed, setSeed] = useState('');
    useEffect(() => {
        
        Math.floor(
           setSeed(Math.random() * 5000)
        );
    }, [])

    const selectRoom = () => {
        dispatch({
            type: actionTypes.SET_ROOM,
            room: id,
          });
          dispatch({
            type: actionTypes.SET_ROOMVAR,
            roomVar: fullRoom,
          });
        console.log("selected room is " + id + " " + room );
      };

    return (
        <div onClick={selectRoom} className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default SidebarChat
