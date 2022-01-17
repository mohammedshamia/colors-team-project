import React from 'react';
import Button from '../../../components/Button/Button';
import { Container } from '../../../components';
import { Divider } from '../../../components/Divider';
import Typography from '../../../components/Typography';
// import Counter from '../../../components/Counter';

const Subtotal = () => {
  return (
    <>
      <Container
        direction="column"
        justifyContent="space-between"
        padding="0 50px"
        margin="0"
      >
        <Typography
          children="Subtotal (3) items"
          variant="h2"
          fontSize="32px"
          letter-spacing="0.64px"
          margin="0 0 30px 0"
        />
        <Typography
          children="$999.97"
          variant="span"
          color="#707070"
          fontSize="24px"
          letter-spacing="0.48px"
          margin="0 0 10px 0"
          text-decoration="line-through"
        />
        <Typography
          children="$989.97"
          variant="h2"
          fontSize="38px"
          letter-spacing="0.76px"
          margin="0 0 50px 0"
        />
      </Container>
      <Divider color="#E8E8E8" />
      <Button width="80%" style={{ margin: '30px auto 0 auto' }}>
        Proceed to checkout
      </Button>
    </>
  );
};

export default Subtotal;
