

import React from 'react';
import styled from 'styled-components';

const ImageHolder = styled.div`
  width: ${ props => props.width };
  height: ${ props => props.height };
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const ContainedImage = ({ src, alt, width, height }) => (
  <ImageHolder width={ width } height={ height }>
    <Image src={ src } alt={ alt } />
  </ImageHolder>
)

ContainedImage.defaultProps = {
  width: '100%',
  height: 'auto',
  alt: '',
};