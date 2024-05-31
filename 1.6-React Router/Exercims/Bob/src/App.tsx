import React, { useState } from 'react';

const HeyComponent: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const hey = (message: string): string => {
    if (message.trim().length >= 1) {
      if (!/[a-z]/.test(message) && /[A-Z]/.test(message) && message.endsWith('?')) {
        return "¡Cálmate, sé lo que estoy haciendo!";
      } else if (message.trim().endsWith('?')) {
        return '¡Claro!';
      } else if (!/[a-z]/.test(message) && /[A-Z]/.test(message)) {
        return '¡Whoa, cálmate!';
      } else {
        return '¡Lo que sea!';
      }
    } else {
      return '¡Está bien, sé así!';
    }
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleCheckMessage = () => {
    setResponse(hey(message));
  };

  return (
    <div>
      <h2>Hey Component</h2>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
      />
      <button onClick={handleCheckMessage}>Check Message</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default HeyComponent;
