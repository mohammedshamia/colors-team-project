import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { Icon } from '..';
import { Button } from '../Button/ButtonStyle';

const Count = styled.div`
  width: 204px;
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const Value = styled.div`
  width: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter = () => {
  return (
    <>
      <Count>
        <Button
          width="48px"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="none"
        >
          <Icon icon={<AiOutlinePlus />} />
        </Button>
        <Value>88</Value>
        <Button
          width="48px"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="none"
        >
          <Icon icon={<AiOutlinePlus />} />
        </Button>
      </Count>
    </>
  );
};

export default Counter;
