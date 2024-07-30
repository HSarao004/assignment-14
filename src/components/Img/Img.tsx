import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{
  $isVisible: boolean;
  $isDisabled: boolean;
  $disabledColor: string;
  $backgroundColor: string;
}>`
  width: 100%;
  height: auto;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  background-color: ${({ $isDisabled, $disabledColor, $backgroundColor }) =>
    $isDisabled ? $disabledColor : $backgroundColor};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 576px) {
    width: 50%;
  }
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  visible = true,
  disabledColor = 'grey',
  backgroundColor = 'transparent',
  ...props
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      $isDisabled={disabled}
      $isVisible={visible}
      $disabledColor={disabledColor}
      $backgroundColor={backgroundColor}
      {...props}
    />
  );
};

export default Img;
