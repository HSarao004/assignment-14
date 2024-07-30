import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  it('renders visible radio button', () => {
    render(<RadioButton visible />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toHaveStyle('display: inline-block');
  });

  it('renders invisible radio button', () => {
    render(<RadioButton visible={false} />);
    const radioButton = screen.queryByRole('radio');
    expect(radioButton).not.toBeInTheDocument();
  });

  it('renders disabled radio button', () => {
    render(<RadioButton disabled />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeDisabled();
  });

  it('renders radio button with custom background when not disabled', () => {
    render(<RadioButton backgroundColor="lightblue" />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toHaveStyle('background-color: lightblue');
  });

  it('can be checked', () => {
    render(<RadioButton />);
    const radioButton = screen.getByRole('radio');
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });

  

  it('changes background color when checked and not disabled', () => {
    render(<RadioButton backgroundColor="white" />);
    const radioButton = screen.getByRole('radio');
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
    expect(radioButton).toHaveStyle('background-color: white');
  });

  it('keeps the disabled color when checked and disabled', () => {
    render(<RadioButton disabled backgroundColor="lightgrey" disabledColor="grey" />);
    const radioButton = screen.getByRole('radio');
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
    expect(radioButton).toHaveStyle('background-color: grey');
  });
});
