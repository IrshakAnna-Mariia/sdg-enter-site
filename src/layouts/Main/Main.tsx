import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import 'index.css';

function Main() {
  return (
    <div className="font-mono">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
