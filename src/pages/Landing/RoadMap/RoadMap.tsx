import Button from '/src/components/Button';
import SectionHeader from '/src/components/SectionHeader';
import { ReactComponent as RoadMapImg } from '/src/icons/roadMap.svg';

const RoadMap = () => {
  return (
    <div className="mt-24 flex min-h-screen flex-col items-center">
      <SectionHeader title={'ROAD MAP'} />
      <RoadMapImg className="w-3/5" />
      <Button label="View your progress" onClick={() => {}} styleForm="pill" size="lg" />
    </div>
  );
};

export default RoadMap;
