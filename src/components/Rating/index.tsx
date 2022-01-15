import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import StarIcon from './styles';

export interface IProps {
  value: number;
  color?: string;
}

const Rating = ({ value }: IProps) => {
  return (
    <div>
      <span>
        <StarIcon>
          {value >= 1 ? (
            <BsStarFill />
          ) : value >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </StarIcon>
      </span>
      <span>
        <StarIcon>
          {value >= 2 ? (
            <BsStarFill />
          ) : value >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </StarIcon>
      </span>
      <span>
        <StarIcon>
          {value >= 3 ? (
            <BsStarFill />
          ) : value >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </StarIcon>
        <span>
          <StarIcon>
            {value >= 4 ? (
              <BsStarFill />
            ) : value >= 3.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </StarIcon>
        </span>
        <span>
          <StarIcon>
            {value >= 5 ? (
              <BsStarFill />
            ) : value >= 4.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </StarIcon>
        </span>
      </span>
    </div>
  );
};

export default Rating;
