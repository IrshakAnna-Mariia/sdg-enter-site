import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';
import { ReactComponent as RoadMapImg } from 'icons/roadMap.svg';

const RoadMap = () => {
  const navigate = useNavigate();

  const handleViewProgress = () => {
    navigate(PathName.Profile);
  };

  return (
    <div className="mt-24 flex min-h-screen flex-col items-center">
      <SectionHeader title={'ROAD MAP'} />
      <RoadMapImg className="w-3/5" />
      <Button label="View your progress" onClick={handleViewProgress} styleForm="pill" size="lg" />
    </div>
  );
};

export default RoadMap;
