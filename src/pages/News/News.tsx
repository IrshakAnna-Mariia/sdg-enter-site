import { useNavigate } from 'react-router-dom';

import SectionHeader from 'components/SectionHeader';
import SearchForm from 'components/SearchForm';
import { useGetNewsQuery } from 'store/news/newsSlice';
import { useAppSelector } from 'store';

import NewItem from './NewItem';
import { PathName } from 'enums/pathNames';

const News = () => {
  const navigate = useNavigate();
  const { role } = useAppSelector((state) => state.user);
  const { data: news, isFetching, isUninitialized, isLoading } = useGetNewsQuery({});

  const isLoadingData = isFetching || isUninitialized || isLoading;

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-8">
      <SectionHeader title="The news" {...(role === 'admin' ? { onAdd: () => navigate(PathName.NewsCreate) } : {})} />
      <SearchForm />

      {news?.length ? (
        news?.map((newItem) => <NewItem {...newItem} key={newItem.id} />)
      ) : isLoadingData ? (
        <span className="text-xl text-white">Loading...</span>
      ) : (
        <div className="flex w-full justify-between gap-4 rounded-xl bg-white p-9">
          <h2 className="text-2xl font-bold">No news yet</h2>
        </div>
      )}
    </div>
  );
};

export default News;
