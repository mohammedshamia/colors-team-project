import React from 'react';
import { Button } from '../Button/ButtonStyle';
import Typography from '../Typography';
import { Content, ContentAction, Header, MainCard } from './cardStyles';

const ComplexCard = () => {
  return (
    <MainCard width="280px">
      <Header />
      <Content>
        <Typography>$999</Typography>
      </Content>
      <ContentAction>
        <Button height="32px" width="32px">
          Add
        </Button>
        <Button height="62px" width="324px">
          Add to cart
        </Button>
      </ContentAction>
    </MainCard>
  );
};

export default ComplexCard;
