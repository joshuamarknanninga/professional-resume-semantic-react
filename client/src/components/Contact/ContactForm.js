import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [status, setStatus] = useState(null); // Success or error
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs
        .send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          formData,
          'YOUR_USER_ID'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.log('FAILED...', error);
            setStatus('error');
          }
        );
    };
  
    return (
      <section aria-labelledby="contact-heading" className={styles.contact}>
        <h2 id="contact-heading">Contact Me</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
  
          <button type="submit">Send Message</button>
        </form>
        {status === 'success' && (
          <p className={styles.success}>Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className={styles.error}>
            There was an error sending your message.
          </p>
        )}
      </section>
    );
  };
  
export default ContactForm;
