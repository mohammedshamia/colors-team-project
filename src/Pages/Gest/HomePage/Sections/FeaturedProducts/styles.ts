import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../../../../components/Row';

export const ContainerCard = styled(Link)`
  align-items: center;
  text-decoration: none;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: #242424;
  display: flex;
  flex-direction: column;
  height: 655px;
  justify-content: center;
  overflow: hidden;
  opacity: 1;
  width: 520px;
  &:first-child and :last-child {
    margin: 0 0;
  }
`;

export const ImageCard = styled('img')`
  height: 100%;
  height: 342px;
  margin-bottom: 34px;
  max-height: 342px;
  max-width: 513px;
  object-fit: fill;
  width: 100%;
`;

export const TitleCard = styled('h3')`
  color: #242424;
  font-size: 24px;
  letter-spacing: 0.48px;
  margin: 35px 0px;
  opacity: 1;
  text-align: center;
  text-decoration: none;
`;

export const DiscountCard = styled('p')`
  color: #fc4059;
  font-size: 30px;
  letter-spacing: 0.6px;
  margin-right: 12px;
  opacity: 1;
  font-family: normal normal bold 30px/15px Muli;
  letter-spacing: 0.6px;
  color: #fc4059;
`;
export const PriceCard = styled('p')<{ isDiscount?: boolean }>`
  color: #242424;
  font-size: 30px;
  letter-spacing: 0.6px;
  margin-right: 8px;
  opacity: 1;
  text-decoration: ${props => (props.isDiscount ? 'line-through' : 'none')};
`;

export const RowPrice = styled(Row)`
  align-items: center;
  font-weight: bold;
  justify-content: center;
  margin-top: 19px;
  margin-bottom: 16px;
`;

export const BockBarkButton = styled('button')`
  border: 10px solid transparent;
  cursor: pointer;
  margin-right: 28px;
  width: 54px;
  height: 62px;
  border-radius: 10px;
  opacity: 1;
`;
export const AddToCartButton = styled(Link)<{ disabled?: boolean }>`
  align-content: center;
  align-items: center;
  background: #f2f2f2 !important;
  cursor: pointer;
  border-radius: 10px;
  color: #242424 !important;
  display: flex;
  flex-direction: row;
  font-size: 24px;
  height: 62px;
  justify-content: center;
  letter-spacing: 0.48px;
  margin-left: 7px;
  opacity: 1;
  text-decoration: none;
  text-transform: capitalize;
  width: 324px;
  ${props =>
    props.disabled &&
    css`
      background: gray;
      color: white;
      cursor: none;
    `}
`;

export const FeaturedProducts = styled('p')`
  color: #242424;
  font-size: 32px;
  font-weight: bold;
`;

export const WrapperRow = styled(Row)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 62px;
  margin-bottom: 34px;
`;

export const FeaturedProductsContainer = styled(Column)`
  background: #f7f8fc;
  height: auto;
  opacity: 1;
  width: 100%;
  min-height: 948px;
`;
export const WrapperDots = styled(Row)`
  align-items: center;
  height: 40px;
  justify-content: flex-end;
  margin: 10px 0px;
  width: auto;
  margin: 0px;
`;
export const CardsCategory = styled(Row)`
  margin-top: 2rem;
`;

export const RowInnerSlider = styled(Row)`
  justify-content: space-between;
  margin-top: 43px;
  border-radius: 16px;
  overflow: hidden;
`;

export const DicountCircle = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 43px;
  width: 78px;
  height: 78px;
  position: absolute;
  border-radius: 50%;
  background: #fc4059 0% 0% no-repeat padding-box;
  color: white;
  text-align: center;
  font-weight: bold;
  position: absolute;
  right: 22px;
  top: -36px;
`;

export const CardContainerWithoutLink = styled(Column)<{
  widthBorder: boolean;
}>`
  height: 100%;
  opacity: 1;
  position: relative;
  overflow: hidden;

  min-width: 520px;
  width: 520px;
  ${props =>
    props.widthBorder &&
    css`
      box-shadow: 0px 2px 20px #08091e1a;
      border-left: 1px solid #f2f2f2;
    `}
  text-decoration: none;
  align-items: center;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  color: #242424;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  margin: 20px;
  &:first-child and :last-child {
    margin: 0px;
  }
`;
