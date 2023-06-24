import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';
import { ReactComponent as RoadMapImg } from 'icons/roadMap.svg';

const RoadMap: React.FC<{ isLanding?: boolean }> = ({ isLanding }) => {
  const navigate = useNavigate();

  const handleViewRoadMap = () => {
    navigate(PathName.RoadMap);
  };

  return (
    <div className="mt-24 flex min-h-screen flex-col items-center">
      <SectionHeader title={'ROAD MAP'} />
      <RoadMapImg className="w-3/5" />
      {isLanding && <Button label="View more" onClick={handleViewRoadMap} styleForm="pill" size="lg" />}
    </div>
  );
};

export default RoadMap;
