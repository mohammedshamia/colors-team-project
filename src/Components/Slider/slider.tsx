import React, { useState, CSSProperties } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { SliderItem } from './SliderItem'
import { Column } from '../Col'
import { InnerSection, Row } from '../Row'
import { Arrow, Dot, RowArrowWrapper } from './Slider.style'

const cssStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '678px',
}

const styles = {
    root: {
        position: 'relative',
        width: '100%',
        height: 678,
    },
}


interface ProductItem {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: string
}
interface IProps {
    data: ProductItem[]
}
export const Slider = ({ data }: IProps) => {
    const [sliderIndex, setSliderIndex] = useState<number>(0)
    const handleChangeIndex = () => {
    }
    const handleLeft = () => {
        if (sliderIndex === 0) {
            setSliderIndex(2)
        } else setSliderIndex(sliderIndex - 1)
    }
    const handleRight = () => {
        if (sliderIndex === 2) {
            setSliderIndex(0)
        } else setSliderIndex(sliderIndex + 1)
    }

    const sliders =
        data.length &&
        data.map((item) => (
            <SliderItem
                _id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
            />
        ))

    return (
        <Column>
            <InnerSection>
                <Column>
                    <SwipeableViews index={sliderIndex} style={cssStyle}>
                        {sliders}
                    </SwipeableViews>
                    <RowArrowWrapper>
                        <Arrow isLeft={true} onClick={handleRight}>
                            &#8250;
                        </Arrow>
                        {Array(3)
                            .fill(0)
                            .map((x, index) => (
                                <Dot
                                    width="25px"
                                    isGrey={sliderIndex !== index}
                                    onClick={() => setSliderIndex(index)}
                                />
                            ))}
                        <Arrow onClick={handleLeft}>&#8250;</Arrow>
                    </RowArrowWrapper>
                </Column>
            </InnerSection>
        </Column>
    )
}
