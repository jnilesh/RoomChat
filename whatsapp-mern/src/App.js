import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js"
import axios from './axios'
import Login from './components/Login';
import { useStateValue } from './ContextApi/StateProvider';

function App() {

  const [{ user,roomVar }, dispatch] = useStateValue();

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    axios.get('/chats/' + roomVar._id)
    .then(response => {
      console.log(response.data);
      setMessages(response.data)
    })

  }, [roomVar._id])

  useEffect(() => {
    // Pusher.logToConsole  = true; s

    const pusher = new Pusher('2dc823cb13284cd07f68', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe(`token-${roomVar._id}`);
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
      console.log(messages);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages,roomVar._id])

  

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
      )}
    </div>
      
    
  );
}

export default App;
