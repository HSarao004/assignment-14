import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ $isVisible: boolean; $isDisabled: boolean; $disabledColor: string }>`
  background-color: ${({ $isDisabled, $disabledColor }) => ($isDisabled ? $disabledColor : 'blue')};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  display: ${({ $isVisible }) => ($isVisible ? 'inline-block' : 'none')};
  transform: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'scale(1)')};
  transition: transform 0.1s;

  &:hover {
    background-color: ${({ $isDisabled }) => ($isDisabled ? 'grey' : 'darkblue')};
  }

  &:active {
    transform: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'scale(0.95)')};
  }
`;

const MyButton: React.FC<MyButtonProps> = ({ children, disabled = false, visible = true, disabledColor = 'grey', ...props }) => {
  return (
    <StyledButton $isDisabled={disabled} $isVisible={visible} $disabledColor={disabledColor} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default MyButton;

export interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  visible?: boolean;
  disabledColor?: string;
}
