import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat'
import { useStateValue } from './ContextApi/StateProvider'

function Sidebar({ rooms }) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">

            <div className="sidebar__header">

                <Avatar src={user.photoURL}/>
                <div className="sidebar__headerInfo">
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
            </div>
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or Start new Chat" 
                    name="" id=""/>
                </div>

            <div className="sidebar__chats">
                {rooms.map((room) => (
                    <SidebarChat name={room.name} description={room.description} />
                ))}
                <SidebarChat />
            </div>

        </div>
    )
}

export default Sidebar
