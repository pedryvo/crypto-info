import { FC } from 'react';
import styled from 'styled-components';

interface CoinInformation {
  iconUrl: string;
  title: string;
  price: number;
}

interface CardProps {
  coinList: CoinInformation[];
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

const CoinIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const CoinTitle = styled.h3`
  margin: 0;
`;

const CoinPrice = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CryptoCard: FC<CardProps> = ({ coinList }) => {
  return (
    <>
      {coinList.map((coin) => (
        <CardContainer key={coin.title}>
          <CoinIcon src={coin.iconUrl} alt={`${coin.title} icon`} />
          <CoinTitle>{coin.title}</CoinTitle>
          <CoinPrice>${coin.price.toFixed(2)}</CoinPrice>
        </CardContainer>
      ))}
    </>
  );
};

export default CryptoCard;
