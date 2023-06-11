import SectionHeader from 'components/SectionHeader';
import GameField from './GameField';

const About = () => {
  return (
    <div className="w-full">
      <SectionHeader title="ABOUT GAME" />
      <p className="mx-auto w-1/2 py-4 text-center text-white">
        Go on an adventure with SDG-game and as a nice bonus learn electronics, programming and much more with us and
        the main character of your spaceship!
      </p>
      <GameField />
    </div>
  );
};

export default About;
