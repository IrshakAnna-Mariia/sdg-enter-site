import { ReactComponent as Spaceship } from 'icons/spaceship.svg';

const MainBanner = () => {
  return (
    <div className="relative mt-32 flex min-h-screen w-full justify-center">
      <div className="font-bold text-white">
        <p className="font-chakraPetch text-5xl">THE BEST GAME ABOUT GALAXY</p>
        <p className="font-chakraPetch text-4xl">official WEB-site of SDG</p>
      </div>

      <div className="w-1/3" />

      <Spaceship className="absolute right-0 top-0 w-1/2" />
    </div>
  );
};

export default MainBanner;
