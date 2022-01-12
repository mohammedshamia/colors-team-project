import Wrapper from './style';
import { IPropTypography } from './interface';

const Typography: React.FC<IPropTypography> = ({
  variant = 'p',
  ...props
}: IPropTypography) => {
  return (
    <Wrapper variant={variant} {...(props as any)}>
      {props.children}
    </Wrapper>
  );
};
export default Typography;
