import SectionHeader from 'components/SectionHeader';
import { ReactComponent as RoadMapImg } from 'icons/roadMap.svg';

const RoadMap = () => {
  return (
    <div className="mt-24 flex min-h-screen flex-col items-center">
      <SectionHeader title={'ROAD MAP'} />
      <RoadMapImg className="w-3/5" />
    </div>
  );
};

export default RoadMap;
