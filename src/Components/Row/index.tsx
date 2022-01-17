import styled from 'styled-components';

interface IRowJS {
  JC?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end';
  item?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first'
    | 'start'
    | 'end';
  width?: string;
}

export const Row = styled('div')<IRowJS>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.JC};
  justify-items: ${props => props.item};
  width: ${props => props.width};
`;

Row.defaultProps = {
  JC: 'start',
  item: 'start',
  width: '100%',
};

export const Column = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.JC};
  justify-items: ${props => props.item};
`;

Column.defaultProps = {
  JC: 'start',
  item: 'start',
};

export const InnerSection = styled(Column)`
  align-items: center;
  margin: 0 auto;
  max-width: 1640px;
  width: 100%;
`;
export const InnerColSection = styled(InnerSection)`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FlexBox = styled('div')`
  align-items: flex-start;
  display: flex;
  height: auto;
  justify-content: flex-start;
  width: 100%;
`;

export const Section = styled(FlexBox)`
  align-items: center;
  margin: 0 auto;
  max-width: 1640px;
  width: 100%;
`;

export const MainContainer = styled(Column)`
  flex-direction: column;
  max-width: 1920px;
  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;
