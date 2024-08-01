import React from 'react';
import Img from '../../components/Img/Img';
import MyButton from '../../components/Mybutton/Mybutton';
import Text from '../../components/Text/Text';

const HomePage = () => {
  return (
    <div style={{ width: '100%' }}>
      <section className="hero">
      <Text content="Harsimran Singh Sarao " />
        <Img src="path/to/your/photo.jpg" alt="Your Photo" />
        <h1>Your Name</h1>
        <Text content="Full Stack Web Developer " />
        <Text content="Let's talk about your project!" />
        <MyButton text="Contact Me" onClick={() => window.location.href = "/contact"} />
      </section>
    </div>
  );
};

export default HomePage;
