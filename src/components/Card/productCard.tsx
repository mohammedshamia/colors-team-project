import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import { Button } from '../Button/ButtonStyle';
import Icon from '../Icon';
import Rating from '../Rating';
import Typography from '../Typography';
import { Content, ContentAction, MainCard } from './cardStyles';
import img from '../../assets/tow.jpg';

const ComplexCard = () => {
  return (
    <MainCard width="520px" height="655px">
      <ContentAction padding="none" margin="none">
        <img
          src={img}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          alt=""
        />
      </ContentAction>
      <Content>
        <Typography width="100%">Description for the product</Typography>
        <Rating value={4.5} />
      </Content>
      <Content>
        <Typography>$999</Typography>
      </Content>
      <ContentAction>
        <Button height="62px" width="54px" margin="0 13px 34px 62px">
          <Icon icon={<BsBookmark />} />
        </Button>
        <Button height="62px" width="324px" background="none">
          Add to cart
        </Button>
      </ContentAction>
    </MainCard>
  );
};

export default ComplexCard;
