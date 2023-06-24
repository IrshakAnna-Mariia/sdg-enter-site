import { useNavigate } from 'react-router-dom';

import SearchForm from 'components/SearchForm';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';

import CQSItem from './CQSItem';
import { useAppSelector } from 'store';
import { useLazyGetCQSQuery } from 'store/cqs/cqsSlice';
import { useEffect } from 'react';

const CQS = () => {
  const navigate = useNavigate();
  const [getCQS, { data }] = useLazyGetCQSQuery();
  const { accessToken } = useAppSelector((state) => state.user);

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
      <SectionHeader title="CQS" {...(accessToken && { onAdd: handleAddCQS })} />
      <SearchForm onSubmit={onSubmitSearchForm} />

      {(data || [])?.map((cqsItem) => (
        <CQSItem {...cqsItem} key={cqsItem.id} />
      ))}
    </div>
  );
};

export default CQS;
