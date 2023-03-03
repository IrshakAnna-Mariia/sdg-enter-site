import Button from 'components/Button';
import { ReactComponent as Spaceship } from 'icons/spaceship.svg';

const MainBanner = () => {
  return (
    <div className="relative w-full mt-12 mb-24 py-32 pl-36 xl:pl-44">
      <div className="font-bold text-white">
        <p className="text-4xl">THE BEST GAME ABOUT GALAXY</p>
        <p className="text-3xl">official WEB-site of SDG</p>

        <Button label="Play online" onClick={() => {}} styleForm="pill" className="mt-14 ml-16" size="lg" />
      </div>

      <Spaceship className="absolute right-0 top-0 w-1/2" />
    </div>
  );
};

export default MainBanner;
