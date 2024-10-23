import React, { useState } from 'react';
import './Chatbot.css';

const userMessage = [
  ["How old is Justin?", "What is Justin's age?", "What is his age?"],
  ["What is Justin's major?", "What does Justin major in?"],
  ["Who's website is this?", "Who's page is this?", "Who created this page?"],
  ["How can I see Justin's resume?"]
];

const botReply = [
  ["Justin is 20 years old.", "He is 20."],
  ["Information Technology-Cybersecurity."],
  ["This is Justin Gordon's page.", "Justin created this page."],
  ["In the top right corner of the page, the icon to the far right is his resume."]
];

const alternative = [
  "Ask something about Justin",
];

const synth = window.speechSynthesis;

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello.. I'm listening! How can I help you.." }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'user', text: input }];
      setMessages(newMessages);
      handleBotResponse(input);
      setInput('');
    }
  };

  const handleBotResponse = (input) => {
    const text = input.toLowerCase().trim();
    let reply = alternative[Math.floor(Math.random() * alternative.length)];

    for (let i = 0; i < userMessage.length; i++) {
      if (userMessage[i].some(question => question.toLowerCase() === text)) {
        reply = botReply[i][Math.floor(Math.random() * botReply[i].length)];
        break;
      }
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', text: reply }
    ]);
    voiceControl(reply);
  };

  const voiceControl = (string) => {
    let u = new SpeechSynthesisUtterance(string);
    u.lang = "en-US";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="card">
      <div id="header">
        <h1>Justin's Chat box!</h1>
      </div>
      <div id="message-section">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div id="input-section">
        <input
          id="input"
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          autoComplete="off"
          autoFocus
        />
        <button className="send" onClick={sendMessage}>
          <div className="circle">
            <i className="zmdi zmdi-mail-send"></i>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
