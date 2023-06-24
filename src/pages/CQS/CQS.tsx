import { useNavigate } from 'react-router-dom';

import SearchForm from 'components/SearchForm';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';

import CQSItem from './CQSItem';
import { useAppSelector } from 'store';
import { useLazyGetCQSQuery } from 'store/cqs/cqsSlice';
import { useEffect } from 'react';
import Loader from 'components/Loader';

const CQS = () => {
  const navigate = useNavigate();
  const [getCQS, { data, isLoading, isUninitialized, isFetching }] = useLazyGetCQSQuery();
  const { accessToken } = useAppSelector((state) => state.user);

  const isLoadingNews = isLoading || isUninitialized || isFetching;

  const handleAddCQS = () => {
    navigate(PathName.AddCQS);
  };

  const onSubmitSearchForm = (data: { keyword: string }) => {
    getCQS({ params: { search: data.keyword || '' } });
  };

  useEffect(() => {
    getCQS({ params: { search: '' } });
  }, [getCQS]);

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-8">
      <Loader isVisible={isLoadingNews} />
      <SectionHeader title="CQS" {...(accessToken && { onAdd: handleAddCQS })} />
      <SearchForm onSubmit={onSubmitSearchForm} />

      {data?.length
        ? (data || [])?.map((cqsItem) => <CQSItem {...cqsItem} key={cqsItem.id} />)
        : !isLoadingNews && (
            <div className="flex w-full justify-between gap-4 rounded-xl bg-white p-9">
              <h2 className="text-2xl font-bold">No news yet</h2>
            </div>
          )}
    </div>
  );
};

export default CQS;
