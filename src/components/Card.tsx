import React from 'react';
import styled from 'styled-components';

interface CardProps {
  currency: string;
  title: string;
  price: number;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  justify-content: flex-start;
  margin-bottom: 50px;

  &:hover {
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  }

  img {
    height: 50px;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 10px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;

const Card: React.FC<CardProps> = ({ currency, title, price }) => {
  return (
    <CardWrapper>
      <img src={`./node_modules/cryptocurrency-icons/svg/color/${currency.toLowerCase()}.svg`} alt="" />
      <Title>{title}</Title>
      <Price>${price}</Price>
    </CardWrapper>
  );
};

export default Card;
