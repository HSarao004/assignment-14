import React from 'react';
import Text from '../../components/Text/Text';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="ProjectsPage">
      <main>
        <section className="projects">
          <Text as="h1" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
            My Projects
          </Text>
          <div className="project">
            <Text as="h2" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Firearm Depot
            </Text>
            <Text as="p" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              An e-commerce platform specializing in firearms, ammunition, and accessories. Implemented using Ruby on Rails, it includes features like user authentication, product management, shopping cart, and order processing.
            </Text>
          </div>
          <div className="project">
            <Text as="h2" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              React Component Library
            </Text>
            <Text as="p" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              A library of reusable React components built using Vite and Storybook. Includes various UI components such as buttons, labels, tables, and more, with support for custom states and styles.
            </Text>
          </div>
          <div className="project">
            <Text as="h2" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Interactive APIs with Flask and Dash
            </Text>
            <Text as="p" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              A project demonstrating the creation of interactive APIs using Flask and Dash for data visualization. Includes a Flask app with multiple routes and a Dash app for displaying visualizations.
            </Text>
          </div>
          <div className="project">
            <Text as="h2" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              Wrist Rotation
            </Text>
            <Text as="p" color="black" visible={true} backgroundColor="transparent" disabledBackgroundColor="grey">
              A CMS website built using PHP for a watch enthusiast community. Features include user authentication, watch collection management, user profiles, and an interactive forum for discussions.
            </Text>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
