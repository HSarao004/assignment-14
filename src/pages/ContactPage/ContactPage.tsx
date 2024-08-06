import React from 'react';

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <main>
        <section className="contact-form">
          <h1>Contact Me</h1>
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <label htmlFor="query">Your Questions:</label>
              <textarea id="query" name="query" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className="social-media">
          <h2>Connect with me</h2>
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:your-email@example.com">Gmail</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
