import Footer from 'components/Footer';
import Header from 'components/Header';
import AboutGame from './AboutGame';
import LastNews from './LastNews';
import MainBanner from './MainBanner';
import RoadMap from './RoadMap';

const Landing = () => {
  return (
    <div className="font-mono">
      <Header />
      <MainBanner />
      <AboutGame />
      <LastNews />
      <RoadMap />
      <Footer />
    </div>
  );
};

export default Landing;
