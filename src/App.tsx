import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Landing from 'pages/Landing';
import 'index.css';

function App() {
  return (
    <div className="font-mono">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
