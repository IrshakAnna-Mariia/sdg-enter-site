import React from 'react';

import Button from '/src/components/Button';
import { ReactComponent as Logo } from '/src/icons/logo.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-2.5 bg-gradient-to-b from-white p-2 pb-4">
      <Logo className="h-16 w-24 text-white" />
      <div>
        <p className="text-base font-extrabold leading-4">SDG</p>
        <p className="text-xs">Space Development Game</p>
      </div>
      <div className="ml-24 flex gap-0.5">
        <Button label="Home" onClick={() => {}} styleForm="pill" />
        <Button label="About" onClick={() => {}} styleForm="text" />
        <Button label="Road map" onClick={() => {}} styleForm="text" />
        <Button label="Team" onClick={() => {}} styleForm="text" />
        <Button label="SQC" onClick={() => {}} styleForm="text" />
        <Button label="Sign In" onClick={() => {}} styleForm="pill" />
      </div>
    </header>
  );
};

export default Header;
