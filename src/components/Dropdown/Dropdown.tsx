import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
  $isDisabled: boolean;
  $isVisible: boolean;
  $backgroundColor: string;
  $disabledBackgroundColor: string;
}>`
  background-color: ${({ $isDisabled, $disabledBackgroundColor, $backgroundColor }) =>
    $isDisabled ? $disabledBackgroundColor : $backgroundColor};
  color: ${({ $isDisabled }) => ($isDisabled ? 'grey' : 'black')};
  font-size: 16px;
  padding: 10px;
  border: 1px solid ${({ $isDisabled }) => ($isDisabled ? 'grey' : 'black')};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  display: ${({ $isVisible }) => ($isVisible ? 'inline-block' : 'none')};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  margin-left: 10px;

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  children,
  disabled = false,
  visible = true,
  backgroundColor = 'white',
  disabledBackgroundColor = 'lightgrey',
  ...props
}) => {
  return (
    <StyledSelect
      $isDisabled={disabled}
      $isVisible={visible}
      $backgroundColor={backgroundColor}
      $disabledBackgroundColor={disabledBackgroundColor}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledSelect>
  );
};

export default Dropdown;
