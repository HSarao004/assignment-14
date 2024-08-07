import React from 'react';
import Text from '../../components/Text/Text';
import MyButton from '../../components/Mybutton/Mybutton';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <main>
        <section className="contact-form">
          <Text as="h1" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
            Contact Me
          </Text>
          <form>
            <div>
              <Text as="label" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey" htmlFor="email">
                Email:
              </Text>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <Text as="label" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey" htmlFor="phone">
                Phone Number:
              </Text>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <Text as="label" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey" htmlFor="query">
                Your Questions:
              </Text>
              <textarea id="query" name="query" required></textarea>
            </div>
            <MyButton type="submit">
              Submit
            </MyButton>
          </form>
        </section>
        <section className="social-media">
          <Text as="h2" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
            Connect with me
          </Text>
          <ul>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">Gmail</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
