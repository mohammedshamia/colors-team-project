import styled from 'styled-components';

interface IProps {
  color?: string;
}

const StarIcon = styled.i<IProps>(({ color = '#f8e825', ...props }) => ({
  color: `${color || props.theme.primary?.lightYallow}`,
}));

export default StarIcon;
