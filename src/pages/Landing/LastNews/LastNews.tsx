import { useNavigate } from "react-router-dom";

import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import ScrollBanner from './ScrollBanner';
import { PathName } from "enums/pathNames";

export const LastNews = () => {
  const navigate = useNavigate();

  const handleViewNews = () => {
    navigate(PathName.News);
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-16 mt-24">
      <SectionHeader title={'THE LAST NEWS'} />
      <div>
        <ScrollBanner />
      </div>
      <Button label="View more" onClick={handleViewNews} styleForm="pill" size="lg" />
    </div>
  );
};

export default LastNews;
