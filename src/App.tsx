import React from 'react';
import Layout from './layouts/LayoutWrapper';

const App: React.FC = () => {
  return (
    <Layout>
      <div>
        <h2>Welcome to my site!</h2>
        <p>This is some example content.</p>
      </div>
    </Layout>
  );
};

export default App;
