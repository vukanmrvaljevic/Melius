import React, { useState } from 'react';
import './Messenger.css';

function Messenger(){
    const [input,setInput] = useState('')
    const [messages, setMessages] = useState([])

    const sendMessage = (event) =>{
        // Send message
        setMessages([...messages, input])
        setInput('');
    }

    return(
        <div className='Messenger'>
        <h1>Real Time Chat</h1>

        <form>
            <input value= {input} onChange={event=> setInput(event.target.value)}/>
            <button type='submit'onClick={sendMessage}> Message</button>

        </form>

        {
            messages.map(message =>(
                <p>{message}</p>
            ))
        }

        </div>
    );

}

export default Messenger