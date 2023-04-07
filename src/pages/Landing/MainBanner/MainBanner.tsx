import { useNavigate } from "react-router-dom";

import Button from 'components/Button';
import { ReactComponent as Spaceship } from 'icons/spaceship.svg';
import { PathName } from "enums/pathNames";

const MainBanner = () => {
  const navigate = useNavigate();

  const handleViewAbout = () => {
    navigate(PathName.About);
  };

  return (
    <div className="relative flex min-h-screen w-full justify-center mt-32">
      <div className="font-bold text-white">
        <p className="font-chakraPetch text-5xl">THE BEST GAME ABOUT GALAXY</p>
        <p className="font-chakraPetch text-4xl">official WEB-site of SDG</p>

        <Button label="Play online" onClick={handleViewAbout} styleForm="pill" className="mt-14 ml-16" size="lg" />
      </div>

      <div className="w-1/3" />

      <Spaceship className="absolute right-0 top-0 w-1/2" />
    </div>
  );
};

export default MainBanner;
