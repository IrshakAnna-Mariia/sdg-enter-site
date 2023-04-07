import { useNavigate } from 'react-router-dom';

import SearchForm from 'components/SearchForm';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';

import CQSItem from './CQSItem';

const cqsArray = [
  {
    title: 'Title 1',
    text: 'Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more.',
    userName: 'User 1',
    id: '1',
  },
  {
    title: 'Title 2',
    text: 'Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more.',
    userName: 'User 2',
    id: '2',
  },
  {
    title: 'Title 3',
    text: 'Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more.',
    userName: 'User 3',
    id: '3',
  },
];

const CQS = () => {
  const navigate = useNavigate();

  const handleAddCQS = () => {
    navigate(PathName.AddCQS);
  };

  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-8">
      <SectionHeader title="CQS" onAdd={handleAddCQS} />
      <SearchForm />

      {cqsArray.map((cqsItem) => (
        <CQSItem {...cqsItem} />
      ))}
    </div>
  );
};

export default CQS;
