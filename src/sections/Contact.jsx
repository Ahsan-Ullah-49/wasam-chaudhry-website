import React, { useState } from 'react';
import '../styles/contact.css';
import contactBackground from "../assets/contact.jpg";


const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful form submission locally
    setStatus('Thank you. Your inquiry has been prepared.');
    
    // Clear the form fields (optional, but good UX for simulated success)
    e.target.reset();

    // Clear success message after 5 seconds
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <section 
      id="contact" 
      className="contact-section"
      style={{ "--contact-bg-image": `url(${contactBackground})` }}
    >
      <div className="contact-bg-word" aria-hidden="true" data-reveal="soft">
        CONNECT
      </div>

      <div className="contact-inner">
        <div className="contact-content" data-reveal="fade-right">
          <div className="contact-kicker">
            <span className="contact-kicker-line"></span>
            <span className="contact-kicker-index">06</span>
            <span className="contact-kicker-text">INQUIRE</span>
          </div>

          <h2>Let’s Make Magic Together</h2>

          <p className="contact-subtitle">
            For business, media, partnerships, automotive opportunities, and meaningful connections.
          </p>

          <div className="contact-details">
            <a className="contact-detail-card" href="mailto:contact@wasamchaudhry.com">
              <span>Email</span>
              <strong>contact@wasamchaudhry.com</strong>
            </a>

            {/* TODO: Replace social URLs with final client-provided links. */}
            <a className="contact-detail-card" href="#" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>Connect professionally</strong>
            </a>

            <a className="contact-detail-card" href="#" target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>Follow the journey</strong>
            </a>

            <a className="contact-detail-card" href="#" target="_blank" rel="noreferrer">
              <span>YouTube</span>
              <strong>Watch media updates</strong>
            </a>

            {/* TODO: Replace booking URL with final client-provided booking link. */}
            <a className="contact-booking-card" href="#" aria-label="Book a meeting">
              <span>Book a Meeting</span>
              <strong>Schedule a private conversation</strong>
              <small>Business • Media • Partnerships</small>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal="fade-left">
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required aria-required="true" />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required aria-required="true" />
          </div>

          <div className="contact-field">
            <label htmlFor="inquiryType">Inquiry Type</label>
            <select id="inquiryType" name="inquiryType" required aria-required="true">
              <option value="" disabled defaultValue>Select an option</option>
              <option value="business">Business Opportunity</option>
              <option value="media">Media / Podcast</option>
              <option value="automotive">Automotive</option>
              <option value="partnership">Partnership</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div className="contact-field contact-field--message">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required aria-required="true"></textarea>
          </div>

          <button type="submit" className="contact-submit btn-gold">
            Send Inquiry
          </button>

          {status && <div className="contact-status-message">{status}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
