import React from 'react';

import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { PathName } from 'enums/pathNames';

const Header = () => {
  const navigate = useNavigate();

  const handleClickLink = (path: PathName) => {
    navigate(path);
  };

  return (
    <header className="flex items-center justify-center gap-2.5 bg-gradient-to-b from-white p-2 pb-4">
      <Logo className="h-16 w-24 text-white" />
      <div>
        <p className="text-base font-extrabold leading-4">SDG</p>
        <p className="text-xs">Space Development Game</p>
      </div>
      <div className="ml-24 flex gap-0.5">
        <Button label="Home" onClick={() => handleClickLink(PathName.HomePage)} styleForm="pill" />
        <Button label="About" onClick={() => handleClickLink(PathName.About)} styleForm="text" />
        <Button label="News" onClick={() => handleClickLink(PathName.News)} styleForm="text" />
        <Button label="Road map" onClick={() => handleClickLink(PathName.RoadMap)} styleForm="text" />
        <Button label="CQS" onClick={() => handleClickLink(PathName.CQS)} styleForm="text" />
        <Button label="Sign In" onClick={() => handleClickLink(PathName.Login)} styleForm="pill" />
      </div>
    </header>
  );
};

export default Header;
