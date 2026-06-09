import React, { useState } from 'react';
import '../styles/contact.css';

// Golf background image is defined in contact.css

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "b85d0fac-53ef-48d7-b752-00d7b5d6878e";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setFormStatus("");
      setFormError("Form service is not configured yet.");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("");
    setFormError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New inquiry from WasamChaudhry.com");
    formData.append("from_name", "Wasam Chaudhry Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("Thank you. Your inquiry has been sent successfully.");
        setFormError("");
        form.reset();
      } else {
        setFormStatus("");
        setFormError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("");
      setFormError("Unable to send your inquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      {/* Large ghost background word */}
      <div className="contact-bg-word" aria-hidden="true" data-reveal="soft">
        CONTACT
      </div>

      <div className="contact-inner">
        {/* ── Left column: content + contact cards ── */}
        <div className="contact-content" data-reveal="fade-right">

          {/* Task 4: Kicker matching About "ABOUT ME" style */}
          <div className="contact-kicker" data-reveal="fade-down">
            <span className="contact-kicker-line"></span>
            <span className="contact-kicker-index">06</span>
            <span className="contact-kicker-text">INQUIRE</span>
          </div>

          <h2>Let's Make Magic Together</h2>

          <p className="contact-subtitle">
            For business, media, partnerships, automotive opportunities, and meaningful connections.
          </p>

          {/* Task 6: Vertical glassmorphism contact cards */}
          <div className="contact-details">

            {/* TODO: Replace with final client-provided email link */}
            <a className="contact-detail-card" href="mailto:contact@wasamchaudhry.com">
              <span>Email</span>
              <strong>contact@wasamchaudhry.com</strong>
            </a>

            {/* TODO: Replace with final client-provided LinkedIn link */}
            <a className="contact-detail-card" href="#" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>Connect professionally</strong>
            </a>

            {/* TODO: Replace with final client-provided Instagram link */}
            <a className="contact-detail-card" href="#" target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>Follow the journey</strong>
            </a>

            {/* TODO: Replace with final client-provided WhatsApp link */}
            <a className="contact-detail-card" href="#" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>Start a direct conversation</strong>
            </a>

            {/* TODO: Replace with final client-provided YouTube link */}
            <a className="contact-detail-card" href="#" target="_blank" rel="noreferrer">
              <span>YouTube</span>
              <strong>Watch media updates</strong>
            </a>

          </div>
        </div>

        {/* ── Right column: contact form ── */}
        <form className="contact-form" onSubmit={handleSubmit} data-reveal="fade-left">
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              aria-required="true"
              placeholder="Your full name"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              aria-required="true"
              placeholder="your@email.com"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-inquiryType">Inquiry Type</label>
            <select id="contact-inquiryType" name="inquiry_type" required aria-required="true" defaultValue="">
              <option value="" disabled>Select inquiry type</option>
              <option value="Business Opportunity">Business Opportunity</option>
              <option value="Media / Podcast">Media / Podcast</option>
              <option value="Automotive">Automotive</option>
              <option value="Partnership">Partnership</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              aria-required="true"
              placeholder="Tell me about your inquiry…"
            ></textarea>
          </div>

          {/* Spam protection */}
          <input
            type="checkbox"
            name="botcheck"
            className="contact-botcheck"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Task 2: Submit button using btn-gold class to exactly match Hero main button */}
          <button 
            type="submit" 
            className="contact-submit btn-gold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>

          {formStatus && (
            <p className="contact-form-status is-success">{formStatus}</p>
          )}

          {formError && (
            <p className="contact-form-status is-error">{formError}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
