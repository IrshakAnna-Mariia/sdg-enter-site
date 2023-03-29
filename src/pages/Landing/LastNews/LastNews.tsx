import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import ScrollBanner from './ScrollBanner';

export const LastNews = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-16">
      <SectionHeader title={'THE LAST NEWS'} />
      <div>
        <ScrollBanner />
      </div>
      <Button label="View more" onClick={() => {}} styleForm="pill" size="lg" />
    </div>
  );
};

export default LastNews;
