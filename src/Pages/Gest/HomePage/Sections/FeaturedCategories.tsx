/* eslint-disable import/extensions */
import React, { useState, CSSProperties, Props } from 'react';
import SwipeableViews from 'react-swipeable-views';
import CategoriesCard from '../../../../Components/categoriesCard/CategoriesCard';
import { DeviderTitle } from '../../../../Components/DeviderTitle/deviderTitle';
import {
  ColumnCusom,
  Divider,
  Title,
} from '../../../../Components/DeviderTitle/style';
import { Column, Row } from '../../../../Components/Row';
import { Dot } from '../../../../Components/Slider/SliderStyle';
import { CardsCategory, WrapperDots } from './FeaturedProducts/styles';

interface IObjFeaturedCategories {
  image: string;
  title: string;
  url: string;
}
const obj: IObjFeaturedCategories = {
  image: 'https://proshop-ms.herokuapp.com/images/phone.jpg',
  title: 'Labptop',
  url: '/Labptop',
};

const cssStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const cssWrapper: CSSProperties = {
  width: '100%',
  height: '90%',
  background: '#c0c3ce',
};
const DotsStyles: CSSProperties = {
  color: '#707070',
  zIndex: 2,
  margin: 10,
};
export const FeaturedCategories = () => {
  const chunkSize =
    window.innerWidth > 1100 ? 4 : window.innerWidth > 1100 ? 2 : 1;
  const getSlides = () => {
    const chunks: any = [];
    Array(12)
      .fill(obj)
      .map((i: any, idx: number) => {
        if (idx % chunkSize === 0) {
          chunks.push([]);
        }

        const firstArrayLength = chunks.length;
        const secondArrayLength = chunks[firstArrayLength - 1].length;

        chunks[firstArrayLength - 1][secondArrayLength] = i;

        return i;
      });

    return chunks.map((i: any, inx: number) => (
      <CardsCategory key={inx}>
        {i.map(item => (
          <CategoriesCard src={item.image} title={item.title} url={item.url} />
        ))}
      </CardsCategory>
    ));
  };
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  return (
    <Column>
      <ColumnCusom>
        <Column
          style={{
            alignItems: 'start',
          }}
        >
          <Row JC="space-between" item="center">
            <Title>Featured Categories</Title>
            <WrapperDots
              item="center"
              style={{
                marginTop: '22px',
              }}
            >
              {Array(getSlides().length)
                .fill(0)
                .map((x, i) => (
                  <Dot
                    style={DotsStyles}
                    width="14px"
                    isGrey={sliderIndex !== i}
                    onClick={() => setSliderIndex(i)}
                  />
                ))}
            </WrapperDots>
          </Row>
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
      )
      <SwipeableViews index={sliderIndex} style={cssStyle}>
        {getSlides()}
      </SwipeableViews>
    </Column>
  );
};
