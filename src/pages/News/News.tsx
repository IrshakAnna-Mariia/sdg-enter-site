import SectionHeader from 'components/SectionHeader';
import SearchForm from 'components/SearchForm';
import { useGetNewsQuery } from 'store/news/newsSlice';

import NewItem from './NewItem';
import Loader from 'components/Loader';

const News = () => {
  const { data: news, isFetching, isUninitialized, isLoading } = useGetNewsQuery({});

  const isLoadingData = isFetching || isUninitialized || isLoading;

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-8">
      <SectionHeader title="The news" />
      <SearchForm />

      {news?.length ? (
        news?.map((newItem) => <NewItem {...newItem} key={newItem.id} />)
      ) : isLoadingData ? (
        <Loader isVisible={false} />
      ) : (
        <div className="flex w-full justify-between gap-4 rounded-xl bg-white p-9">
          <h2 className="text-2xl font-bold">No news yet</h2>
        </div>
      )}
    </div>
  );
};

export default News;
