import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';
import MemoryRouterWrapper from '../../MemoryRouterWrapper';

describe('Footer Component', () => {
  it('renders Contact link', () => {
    render(
      <MemoryRouterWrapper>
        <Footer />
      </MemoryRouterWrapper>
    );
    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
  });

  it('renders Projects link', () => {
    render(
      <MemoryRouterWrapper>
        <Footer />
      </MemoryRouterWrapper>
    );
    const projectsLink = screen.getByText('Projects');
    expect(projectsLink).toBeInTheDocument();
  });

  
});
