import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import { Container } from '../../components';
import Path from '../../components/Path';
import CartList from './Sections/CartList';
import Subtotal from './Sections/Subtotal';
// import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 'One',
      name: 'productOne',
      price: 5000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU',
      description: 'productOne description',
      quantity: 5,
    },
    {
      id: 'Two',
      name: 'productTwo',
      price: 3700,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU',
      description: 'productOne description',
      quantity: 5,
    },
  ]);
  return (
    <>
      <Path name="Shopping Cart" path="/" />
      {cartItems.length === 0 ? (
        <h3>You cart is empty</h3>
      ) : (
        <Container justifyContent="space-between" align-items="start">
          <GlobalStyle />
          <Container direction="column" width="70%" padding="0" margin="0">
            {cartItems.map((item: IProduct) => {
              return <CartList item={item} key={item.id} />;
            })}
          </Container>

          <Container
            direction="column"
            justifyContent="space-between"
            width="30%"
            background-color="#F2F2F2"
            border-radius="16px"
            padding="25px 0"
            margin-left="30px"
          >
            <Subtotal />
          </Container>
        </Container>
      )}
    </>
  );
};

export default Cart;
