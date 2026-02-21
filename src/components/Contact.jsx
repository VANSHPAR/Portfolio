import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper.jsx';
import emailjs from '@emailjs/browser' // Ensure emailjs-com is installed
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

/**
 * Contact component – renders a contact form that sends an email via EmailJS
 * and displays social media icons.
 *
 * Environment variables required (place them in a .env file at the project root):
 * REACT_APP_EMAILJS_SERVICE_ID
 * REACT_APP_EMAILJS_TEMPLATE_ID
 * REACT_APP_EMAILJS_USER_ID
 */
export default function Contact() {
  const [status, setStatus] = useState(null); // null | 'SUCCESS' | 'ERROR'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    const templateParams = {
      from_name: name.value,
      reply_to: email.value,
      message: message.value,
    };
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setStatus('SUCCESS');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('ERROR');
    }
  };

  return (
    <SectionWrapper id="contact" bg="bg-navy-900" aosType="fade-up">
      <h2 className="text-4xl  font-bold mb-8 text-center text-white">
        Contact Me
      </h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-800 text-gray-200"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-800 text-gray-200"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="p-3 rounded bg-gray-800 text-gray-200"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded"
          >
            Send Message
          </button>
          {status === 'SUCCESS' && (
            <p className="text-emerald-300">Message sent successfully!</p>
          )}
          {status === 'ERROR' && (
            <p className="text-red-400">Oops! Something went wrong.</p>
          )}
        </form>
        <div className="flex justify-center space-x-6 mt-8 text-2xl">
          <a
            href="https://github.com/VANSHPAR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vansh-parmar-b293b5341"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
