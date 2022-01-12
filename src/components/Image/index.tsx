import React from 'react';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
  fit?: string;
}

const Image = (props: IProps) => {
  return <img src="" alt="" max-height="100%" {...props} />;
};

export default Image;

Image.defaultProps = {
  width: '100%',
  height: 'auto',
  fit: 'fill',
};
