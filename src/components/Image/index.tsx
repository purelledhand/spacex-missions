import React from 'react';
import './index.scss';

interface Props {
  src: string;
  alt: string;
  squareRatio?: boolean;
}

const Image: React.FC<Props> = ({ src, alt, squareRatio = false }) => {
  return (
    <img className={squareRatio ? 'square' : 'image'} src={src} alt={alt} />
  );
};

export default Image;
