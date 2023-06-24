import { useContext } from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { ScrollBannerCardProps } from './ScrollBannerCard.types';

const ScrollBannerCard: React.FC<ScrollBannerCardProps> = ({ title, itemId, files }) => {
  const visibility = useContext(VisibilityContext);
  visibility.isItemVisible(itemId);

  return (
    <div onClick={() => visibility} className="mx-4 cursor-pointer" tabIndex={0}>
      <div className="card h-52 w-96">{files?.[0] && <img alt={title} src={files[0]} className="h-52 w-96" />}</div>
      <p className="max-w-sm truncate py-4 text-lg text-white">{title}</p>
    </div>
  );
};

export default ScrollBannerCard;
