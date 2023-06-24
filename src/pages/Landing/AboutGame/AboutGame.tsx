import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import { ReactComponent as AboutGameRocket } from 'icons/aboutGameRocket.svg';
import { PathName } from 'enums/pathNames';

const AboutGame = () => {
  const navigate = useNavigate();

  const handleViewAbout = () => {
    navigate(PathName.About);
  };

  return (
    <div className="relative my-12 flex min-h-screen w-full flex-col items-center py-4 text-white">
      <SectionHeader title={'ABOUT GAME'} />
      <AboutGameRocket className="w-2/3 self-end" />
      <div className="absolute top-2/3 left-16 flex w-2/5 flex-col items-center self-start px-6">
        <span className="mb-16 text-center font-sans text-3xl">
          These game developing by SDG team. Final Space is game where you can ...
        </span>
        <Button label="View more" onClick={handleViewAbout} styleForm="pill" size="lg" />
      </div>
    </div>
  );
};

export default AboutGame;
