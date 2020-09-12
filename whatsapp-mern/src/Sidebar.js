import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import {Avatar, Badge} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat'
import { useStateValue } from './ContextApi/StateProvider'
import AddRoom from './components/AddRoom'
import axios from './axios'
import Pusher from 'pusher-js'


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    const [rooms, setRooms] = useState([])    

    useEffect(() => {
        axios.get('/rooms')
        .then(response => {
          console.log(response.data);
          setRooms(response.data)
        })
      }, [])

      useEffect(() => {
        const pusher = new Pusher('2dc823cb13284cd07f68', {
          cluster: 'ap2'
        });
    
        const channel = pusher.subscribe('rooms');
        channel.bind('created', (newRoom) => {
          // alert(JSON.stringify(newMessage));
          setRooms([...rooms, newRoom])
        });
    
        return () => {
          channel.unbind_all();
          channel.unsubscribe();
        }
      }, [rooms])



    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Badge anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }} 
                color='primary' overlap="circle" badgeContent="" >
                <Avatar src={user.photoURL}/>
                </Badge>
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

                <AddRoom />

                {rooms.map((room) => (
                    <SidebarChat key={room._id} fullRoom={room} />
                ))}
            </div>

        </div>
    )
}

export default Sidebar
