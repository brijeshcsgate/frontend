import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form data to be submitted to the backend
    const formData = {
      to,
      subject,
      text,
    };
    // Replace 'http://localhost:4001/send-email' with your backend endpoint
    axios.post('http://localhost:4001/send-email', formData)
      .then((response) => {
        console.log('Email sent successfully:', response.data);
        setMessage('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setMessage('Failed to send email. Please try again later.');
      });
  };

  return (
    <div>
      <h1>Email Sending App</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>To:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Text:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default EmailForm;
