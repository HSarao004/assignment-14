import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import MemoryRouterWrapper from '../../MemoryRouterWrapper';

describe('Navbar Component', () => {
  it('renders Home link', () => {
    render(
      <MemoryRouterWrapper>
        <Navbar />
      </MemoryRouterWrapper>
    );
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
  });

  it('renders About link', () => {
    render(
      <MemoryRouterWrapper>
        <Navbar />
      </MemoryRouterWrapper>
    );
    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
  });

 
});
