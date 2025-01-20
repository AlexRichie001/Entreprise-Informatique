import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci de nous avoir contactés ! Nous reviendrons vers vous sous peu.');
  };

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
