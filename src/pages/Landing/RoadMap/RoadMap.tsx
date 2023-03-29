import Button from "components/Button";
import SectionHeader from "components/SectionHeader";
import { ReactComponent as RoadMapImg } from "icons/roadMap.svg";

const RoadMap = () => {
  return (
    <div className="flex min-h-screen flex-col items-center mt-24">
      <SectionHeader title={'ROAD MAP'} />
      <RoadMapImg className="w-3/5" />
      <Button label="View your progress" onClick={() => {}} styleForm="pill" size="lg" />
    </div>
  );
};

export default RoadMap;
