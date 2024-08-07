import React from 'react';
import { MemoryRouter } from 'react-router-dom';

interface MemoryRouterWrapperProps {
  children: React.ReactNode;
  initialEntries?: string[];
}

const MemoryRouterWrapper: React.FC<MemoryRouterWrapperProps> = ({ children, initialEntries = ['/'] }) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      {children}
    </MemoryRouter>
  );
};

export default MemoryRouterWrapper;
