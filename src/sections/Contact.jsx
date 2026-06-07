import React, { useState } from 'react';
import '../styles/contact.css';

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
    <section id="contact" className="contact-section">
      <div className="contact-bg-word" aria-hidden="true" data-reveal="soft">
        CONNECT
      </div>

      <div className="contact-inner">
        <div className="contact-content" data-reveal="fade-right">
          <div className="contact-kicker">
            <span>06</span>
            <span>INQUIRE</span>
          </div>

          <h2>Let’s Make Magic Together</h2>

          <p className="contact-subtitle">
            For business, media, partnerships, automotive opportunities, and meaningful connections.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-detail-label">Email</span>
              {/* TODO: Replace email link with final client-provided link */}
              <a href="mailto:contact@wasamchaudhry.com" className="contact-detail-value">
                contact@wasamchaudhry.com
              </a>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-label">Social</span>
              <div className="contact-detail-links">
                {/* TODO: Replace social links with final client-provided links */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="contact-detail-value">
                  LinkedIn
                </a>
                <span className="contact-detail-separator">/</span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="contact-detail-value">
                  Instagram
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-label">Booking</span>
              {/* TODO: Replace booking link with final client-provided link */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="contact-detail-value">
                Schedule a Conversation
              </a>
            </div>
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

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required aria-required="true"></textarea>
          </div>

          <button type="submit" className="contact-submit">
            Send Inquiry
          </button>

          {status && <div className="contact-status-message">{status}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
