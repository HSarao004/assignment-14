import React from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.input<{
  $isVisible: boolean;
  $isDisabled: boolean;
  $disabledColor: string;
  $backgroundColor: string;
}>`
  display: ${({ $isVisible }) => ($isVisible ? 'inline-block' : 'none')};
  background-color: ${({ $isDisabled, $disabledColor, $backgroundColor }) =>
    $isDisabled ? $disabledColor : $backgroundColor};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled = false,
  visible = true,
  disabledColor = 'grey',
  backgroundColor = 'white',
  ...props
}) => {
  return (
    <StyledRadioButton
      type="radio"
      $isDisabled={disabled}
      $isVisible={visible}
      $disabledColor={disabledColor}
      $backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    />
  );
};

export default RadioButton;

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  visible?: boolean;
  disabledColor?: string;
  backgroundColor?: string;
}
