import SectionHeader from 'components/SectionHeader';
import NewItem from 'pages/News/NewItem';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyGetNewsItemByIdQuery } from 'store/news/newsSlice';

const NewsPage = () => {
  const { newsId = '' } = useParams<{ newsId: string }>();
  const [getNewsItemData, { data, isLoading, isFetching }] = useLazyGetNewsItemByIdQuery();

  useEffect(() => {
    if (newsId) getNewsItemData({ id: newsId });
  }, [getNewsItemData, newsId]);

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-8">
      <SectionHeader title={isLoading || isFetching ? 'Loading...' : data ? data.title : 'No Title'} />

      {data && <NewItem {...data} isFullVersion />}
    </div>
  );
};

export default NewsPage;
