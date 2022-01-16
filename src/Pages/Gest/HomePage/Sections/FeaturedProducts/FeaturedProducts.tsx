
import { useState, CSSProperties } from 'react'
import { CardItem } from './CardItem'
import SwipeableViews from 'react-swipeable-views'
import { FeaturedProductsContainer, WrapperDots, RowInnerSlider } from './styles'
import { SpinnerContainer } from '../../../../../Components/widget/SpinnerContainer';
import { InnerSection } from '../../../../../Components/Row';
import { Dot } from '../../../../../Components/Slider/Slider.style';
import { DeviderTitle } from '../../../../../Components/DeviderTitle/deviderTitle';

interface Props {
  data: IProduct[];
}

const cssStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
}

const cssWrapper: CSSProperties = {
  width: '100%',
  height: '90%',
  background: '#F7F8FC',
}
const DotsStyles: CSSProperties = {
  color: '#707070',
  zIndex: 2,
  margin: 10,
}


export interface IProduct{
  _id:string,
  image:string,
  price:number,
  name:string,
  rating:number,
  discount:number
}
export const FeaturedProduct = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0)
  let  data=Array(22).fill(
    {
      "rating": 3.5384615384615383,
           "price": 89.99,
           "_id": "60df749a5027923750d7972e",
           "name": "Airpods Wireless Bluetooth Headphones",
           "image": "/images/airpods.jpg",
           "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
           "discount":20
           }
  )


 const chunkSize =
    window.innerWidth > 1100 ? 3 : window.innerWidth > 1100 ? 2 : 1
  const getSlides = () => {
    const chunks: any = []

    data.map((i:any, idx:number) => {
      if(idx % chunkSize === 0) {
        chunks.push([])
      }

      const firstArrayLength = chunks.length
      const secondArrayLength = chunks[firstArrayLength - 1].length

      chunks[firstArrayLength - 1][secondArrayLength] = i

      return i
})

    return chunks.map((i: any, inx: number) => (
      <RowInnerSlider key={inx}>
        {i.map((item: IProduct) => (
          <CardItem
            product={item}
            key={item._id}
            _id={item._id}
            image={'https://proshop-ms.herokuapp.com/' + item.image}
            name={item.name}
            price={item.price}
            discount={item.discount}
            rating={item.rating} widthBorder={false}/>
        ))}
      </RowInnerSlider>
    ))
  }



let  fetchFeathers={
  isLoading:false
}

  return fetchFeathers.isLoading
? (
    <SpinnerContainer />
  )
: (
    <>
      <FeaturedProductsContainer>
        <InnerSection style={cssWrapper}>
          <DeviderTitle title='Featured Product' position='center' />
          <SwipeableViews index={sliderIndex} style={cssStyle}>
            {getSlides()}
          </SwipeableViews>

          <WrapperDots>
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
        </InnerSection>
      </FeaturedProductsContainer>
    </>
  )
}
