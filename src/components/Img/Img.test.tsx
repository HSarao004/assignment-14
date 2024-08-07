import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img Component', () => {
  it('renders with default props', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  it('renders disabled image', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" disabled />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveStyle('opacity: 0.5');
    expect(imgElement).toHaveStyle('cursor: not-allowed');
    expect(imgElement).toHaveStyle('background-color: grey');
  });

  it('renders hidden image', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={false} />);
    const imgElement = screen.queryByAltText('Placeholder Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).not.toBeVisible();
  });

  it('handles custom background color', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" disabled backgroundColor="blue" />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveStyle('background-color: grey'); // because it's disabled
    expect(imgElement).toHaveStyle('opacity: 0.5');
  });
});
