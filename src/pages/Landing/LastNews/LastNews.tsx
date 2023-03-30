import Button from '/src/components/Button';
import SectionHeader from '/src/components/SectionHeader';
import ScrollBanner from './ScrollBanner';

export const LastNews = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-16 mt-24">
      <SectionHeader title={'THE LAST NEWS'} />
      <div>
        <ScrollBanner />
      </div>
      <Button label="View more" onClick={() => {}} styleForm="pill" size="lg" />
    </div>
  );
};

export default LastNews;
