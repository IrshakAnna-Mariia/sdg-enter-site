import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import 'index.css';

function Main() {
  return (
    <div className="font-mono">
      <Header />
      <div className="py-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
