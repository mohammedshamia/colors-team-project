import styled from 'styled-components';
import { Column } from '../Row';
import { ColumnCusom, Title, Divider } from './style';

interface ILabelName {
  title: string;
  position: 'start' | 'center';
}

export const DeviderTitle = ({ title, position }: ILabelName) => {
  return (
    <ColumnCusom>
      <Column
        style={{
          alignItems: position,
        }}
      >
        <Title>{title}</Title>
        <Divider
          width="200px"
          height="7px"
          color="#FCDD06"
          style={{
            marginTop: '22px',
          }}
        />
      </Column>

      <Divider width="100%" height="1px" color="#707070" />
    </ColumnCusom>
  );
};
