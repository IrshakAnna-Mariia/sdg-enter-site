import AboutGame from './AboutGame';
import CQS from './CQS';
import LastNews from './LastNews';
import MainBanner from './MainBanner';
import RoadMap from './RoadMap';

const Landing = () => {
  return (
    <>
      <MainBanner />
      <AboutGame />
      <LastNews />
      <RoadMap isLanding />
      <CQS />
    </>
  );
};

export default Landing;
