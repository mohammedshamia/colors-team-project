import { IContainerProps } from './interface';
import { ContainerWrapper } from './style';

export const Container: React.FC<IContainerProps> = props => (
  <ContainerWrapper {...props} />
);
