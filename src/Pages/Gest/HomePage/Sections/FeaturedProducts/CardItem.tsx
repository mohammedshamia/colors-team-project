/* eslint-disable @typescript-eslint/ban-types */
import { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { BsFillBookmarkDashFill } from 'react-icons/bs';

import ReactStars from 'react-rating-stars-component';
import {
  ContainerCard,
  WrapperRow,
  ImageCard,
  TitleCard,
  PriceCard,
  RowPrice,
  AddToCartButton,
  BockBarkButton,
  CardContainerWithoutLink,
  DiscountCard,
  DicountCircle,
} from './styles';
import { Row } from '../../../../../components/Row';

const style: CSSProperties = {
  width: '24px',
  height: '28px',
  fontSize: 40,
  color: '#242424',
  fill: '#242424',
  opacity: 0.3,
};

interface PropsCardItem {
  _id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  product: {};
  widthBorder: boolean;
  discount?: number;
}

export const CardItem = ({
  _id,
  image,
  discount,
  name,
  price,
  rating,
  product,
  widthBorder = false,
}: PropsCardItem) => {
  return (
    <CardContainerWithoutLink widthBorder>
      {discount && discount > 0 && <DicountCircle> - {40} $</DicountCircle>}
      <ContainerCard to={`/product/${_id}`}>
        <ImageCard src={image} alt={name} />
        <TitleCard>{name}</TitleCard>

        <Row JC="center" item="center">
          <ReactStars
            isHalf
            name="rate"
            edit={false}
            value={rating}
            size={50}
          />
        </Row>
        <RowPrice>
          {discount && discount > 0 ? (
            <>
              <DiscountCard>{discount}</DiscountCard>
              <PriceCard isDiscount>{price}</PriceCard>
            </>
          ) : (
            <PriceCard>${price}</PriceCard>
          )}
        </RowPrice>
      </ContainerCard>
      <WrapperRow>
        <Row JC="center">
          <BockBarkButton>
            <BsFillBookmarkDashFill style={style} />
          </BockBarkButton>
          <AddToCartButton to={`/product/${_id}`}>Add to cart</AddToCartButton>
        </Row>
      </WrapperRow>
    </CardContainerWithoutLink>
  );
};
