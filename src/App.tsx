import React from 'react';
import Layout from './layouts/LayoutWrapper';
import styled from 'styled-components';
import Card from './components/Card';
import { useState, useEffect } from 'react';

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px;
`;

const App: React.FC = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://api.coinlore.net/api/tickers/')
      .then(response => response.json())
      .then(data => setCards(data.data));
  }, []);

  console.log(cards);

  return (
    <Layout>
      <CardGrid>
        {cards.map((card, index) => (
          <Card key={index} currency={card.symbol} title={card.name} price={card.price_usd} />
        ))}
      </CardGrid>
    </Layout>
  );
};

export default App;
