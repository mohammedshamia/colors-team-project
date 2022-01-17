/* eslint-disable no-underscore-dangle */
import React from 'react';
import { DeviderTitle } from '../../../../../Components/DeviderTitle/deviderTitle';
import { InnerSection } from '../../../../../Components/Row';
import { CardItem } from '../FeaturedProducts/CardItem';
import { IProduct } from '../FeaturedProducts/FeaturedProducts';
import { RowWithRadius, CustomTopRate, CustomInnerSection } from './style';

interface Props {
  data: IProduct[];
}

export const TopRate = ({ data }: Props) => {
  return (
    <CustomTopRate>
      <CustomInnerSection>
        <DeviderTitle position="start" title="TOP RATE PRODUCTS" />
        <RowWithRadius>
          {data.map((item: IProduct, i) => (
            <CardItem
              widthBorder
              _id={item._id}
              key={item._id}
              image={`https://proshop-ms.herokuapp.com${item.image}`}
              name={item.name}
              price={item.price}
              product={item}
              rating={item.rating}
            />
          ))}
        </RowWithRadius>
      </CustomInnerSection>
    </CustomTopRate>
  );
};
