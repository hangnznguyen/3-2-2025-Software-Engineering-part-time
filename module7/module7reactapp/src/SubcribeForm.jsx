import React, { useState, useContext } from 'react';
import { MyThemeContext } from './MythemeContext';
import { UserContext } from './UserContextProvider';

function SubscribeForm() {
  const [status, setStatus] = useState('');
  const [firstName, setFirstName] = useState('Mary');
  const [email, setEmail] = useState('mary@poppins.com');

  const theme = useContext(MyThemeContext); // ✅ correct useContext
  // You could also get user data if needed:
  // const user = useContext(UserContext);

  const handleNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  function handleSubscribe() {
    setFirstName('');
    setEmail('');
    setStatus('Thanks for subscribing!');
  }

  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <label>
        First name:
        <input value={firstName} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}

export default SubscribeForm;