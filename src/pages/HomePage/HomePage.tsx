import React from 'react';
import MyButton from '../../components/Mybutton/Mybutton';
import Text from '../../components/Text/Text';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="HomePage">
      <section className="hero">
        <Text as="h1" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
          Harsimran Singh Sarao
        </Text>
        <Text as="p" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
          Full Stack Web Developer
        </Text>
        <Text as="p" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
          Let's talk about your project!
        </Text>
        <MyButton onClick={() => window.location.href = "/contact"}>
          Contact Me
        </MyButton>
      </section>
    </div>
  );
};

export default HomePage;
