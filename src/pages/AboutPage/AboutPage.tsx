import React from 'react';
import Text from '../../components/Text/Text';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <main>
        <section className="about">
          <Text as="h1" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
            I am a Full Stack Web Developer
          </Text>
          <div>
            <Text as="h2" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Skills
            </Text>
            <Text as="p" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              I have a diverse skill set encompassing both frontend and backend technologies, version control, and various tools essential for modern web development.
            </Text>
            <ul>
            <Text as="h3" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Frontend
            </Text>
            <li>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                React
              </Text>
              </li>
              <li><Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                HTML
              </Text></li>
              <li>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                CSS
              </Text></li>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                JavaScript
              </Text>
            </ul>
            <Text as="h3" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Backend
            </Text>
            <ul>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Node.js
              </Text>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Ruby on Rails
              </Text>
            </ul>
            <Text as="h3" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Databases
            </Text>
            <ul>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                MongoDB
              </Text>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                PostgreSQL
              </Text>
            </ul>
            <Text as="h3" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Version Control
            </Text>
            <ul>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Git
              </Text>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                GitHub
              </Text>
            </ul>
            <Text as="h3" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Tools
            </Text>
            <ul>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Docker
              </Text>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Figma
              </Text>
            </ul>
          </div>
          <div>
            <Text as="h2" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Education
            </Text>
            <Text as="p" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              I have completed a Full Stack Web Development Diploma from Red River College, where I covered various aspects of web development, including:
            </Text>
            <ul>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Frontend and backend technologies
              </Text>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Database management
              </Text>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Project management
              </Text>
              <Text as="li" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
                Web security
              </Text>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
