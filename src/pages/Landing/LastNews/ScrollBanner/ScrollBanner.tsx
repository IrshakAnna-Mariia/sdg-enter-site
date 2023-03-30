import { useCallback, useState } from 'react';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import news1 from '/src/icons/news1.png';
import news2 from '/src/icons/news2.png';
import news3 from '/src/icons/news3.png';

import ScrollBannerCard from '../ScrollBannerCard';
import { onWheel } from './scrollBanner.settings';
import { scrollVisibilityApiType } from './scrollBanner.types';

const getItems = () => [
  { title: 'Title 1', files: [news1], id: '1' },
  { title: 'Title 2', files: [news2], id: '2' },
  { title: 'Title 3', files: [news3], id: '3' },
  { title: 'Title 4', files: [news1], id: '4' },
  { title: 'Title 5', files: [news2], id: '5' },
  { title: 'Title 6', files: [news3], id: '6' },
];

const ScrollBanner = () => {
  const items = getItems();
  const [position, setPosition] = useState(0);

  const savePosition = useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) =>
      !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft),
    [],
  );

  const restorePosition = useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = position;
      }
    },
    [position],
  );

  return (
    <ScrollMenu
      onInit={restorePosition}
      onScroll={savePosition}
      onWheel={onWheel}
      wrapperClassName="w-screen max-w-fit py-10 px-20"
    >
      {items.map(({ id, title, files }) => (
        <ScrollBannerCard itemId={id} title={title} files={files} key={id} />
      ))}
    </ScrollMenu>
  );
};

export default ScrollBanner;
