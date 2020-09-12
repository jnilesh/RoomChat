import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
import { useStateValue } from "./ContextApi/StateProvider";
import { actionTypes } from "./ContextApi/reducer";

function SidebarChat({ fullRoom}) {

    const [{ roomVar }, dispatch] = useStateValue();


    const selectRoom = () => {
          dispatch({
            type: actionTypes.SET_ROOMVAR,
            roomVar: fullRoom,
          });
        console.log("selected room is " + fullRoom._id + " = " + roomVar._id );
      };

    return (
        <div onClick={selectRoom} className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${fullRoom.creator.uid}${fullRoom._id}.svg`} />
            <div className="sidebarChat__info">
                <h2>{fullRoom.name}</h2>
                <p>{fullRoom.description}</p>
            </div>
            
        </div>
    )
}

export default SidebarChat
