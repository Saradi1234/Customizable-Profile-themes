import React, { useEffect, useRef, useState } from 'react'
import chatData from '../data/chatData.json'
import { IoMdSend } from 'react-icons/io'
import Navbar from './Navbar'
import "../styles/chatbox.css"

const Chatbox = () => {

  const [botMessagesJSX, setBotMessagesJSX] = useState([])
  const [theme, setTheme] = useState('Light')
  const inputRef = useRef(null)

  const showBotMessages = () => {
      chatData.map((chat, i) => {
        const lastChat = chatData.length === i + 1
        setTimeout(() => {
          const JSX = <div
            key={chat.id}
            className={`bubble chat ${lastChat ? 'lastChat' : ''} ${theme}`}
            style={{}}
          >
            {chat.message}
          </div>
          setBotMessagesJSX(prev => [...prev, JSX])
        }, 1000 * (i + 1))
      })
  }
  
  const handleOnEnter = (e) => {
    if (e.key === "Enter") handleSendMessage()
  }
  
  const handleSendMessage = () => {
    const replyMsg = inputRef.current.value

    const replyJSX = <div
      key={'00' + botMessagesJSX.length}
      className={`bubble reply ${theme}`}
    >
      {replyMsg}
    </div>

    setBotMessagesJSX(rest => [...rest, replyJSX])
    inputRef.current.value = ''
  }

  useEffect(() => {
    const chats = document.getElementsByClassName('bubble')
    Array.from(chats).forEach((chat, i) => {
      const lastChat = chats.length === i + 1
      if (chat.className.includes('chat')) {
        chat.className = lastChat ? `bubble chat lastChat ${theme}` : `bubble chat ${theme}`
      }
      else {
        chat.className = `bubble reply ${theme}`
      }
    });
  }, [theme])

  useEffect(() => {
    const prevSetTheme = localStorage.getItem('theme')
    setTheme(prevSetTheme)
    setBotMessagesJSX([])
    showBotMessages()
  }, [])


  return (
    <div>
      <Navbar setTheme={setTheme} theme={theme} />

      <div className={`container ${theme}`}>
        <div className="chat-box">
          {botMessagesJSX}
        </div>
        <div className="input-box">
          <input ref={inputRef} type="text" placeholder='Type message here' onKeyUp={handleOnEnter} />
          <IoMdSend className='send-icon' onClick={handleSendMessage} />
        </div>
      </div>
    </div>
  )
}

export default Chatbox