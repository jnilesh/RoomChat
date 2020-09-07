import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or Start new Chat" 
                    name="" id=""/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
