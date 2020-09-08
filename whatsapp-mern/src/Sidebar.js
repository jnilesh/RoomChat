import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
            </div>
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or Start new Chat" 
                    name="" id=""/>
                </div>

            <div className="sidebar__chats">
                <SidebarChat />
            </div>

        </div>
    )
}

export default Sidebar
