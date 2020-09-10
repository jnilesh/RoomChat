import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js"
import axios from './axios'
import Login from './components/Login';
import { useStateValue } from './ContextApi/StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      console.log(response.data);
      setMessages(response.data)
    })

    axios.get('/rooms')
    .then(response => {
      console.log(response.data);
      setRooms(response.data)
    })
  }, [])

  useEffect(() => {
    // Pusher.logToConsole  = true;

    const pusher = new Pusher('2dc823cb13284cd07f68', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <div className="app__body">
        <Sidebar rooms={rooms} />
        <Chat messages={messages}/>
      </div>
      )}
    </div>
      
    
  );
}

export default App;
