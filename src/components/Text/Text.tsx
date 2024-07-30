import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.span<{ $color: string; $isDisabled: boolean; $isVisible: boolean; $backgroundColor: string; $disabledBackgroundColor: string }>`
  color: ${({ $isDisabled, $color }) => ($isDisabled ? 'grey' : $color)};
  background-color: ${({ $isDisabled, $disabledBackgroundColor, $backgroundColor }) => ($isDisabled ? $disabledBackgroundColor : $backgroundColor)};
  font-size: 16px;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'default')};
  display: ${({ $isVisible }) => ($isVisible ? 'inline' : 'none')};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  padding: 5px;

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

const Text: React.FC<TextProps> = ({ children, color = 'black', disabled = false, visible = true, backgroundColor = 'transparent', disabledBackgroundColor = 'grey', ...props }) => {
  return (
    <StyledText
      $color={color}
      $isDisabled={disabled}
      $isVisible={visible}
      $backgroundColor={backgroundColor}
      $disabledBackgroundColor={disabledBackgroundColor}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
