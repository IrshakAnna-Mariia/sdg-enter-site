import SectionHeader from 'components/SectionHeader';

import NewItem from './NewItem';
import SearchForm from 'components/SearchForm';

const news = [
  {
    title: 'Title 1',
    text: 'Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more.',
    filePath: '',
    id: '1',
  },
  {
    title: 'Title 2',
    text: 'Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more.',
    filePath: '',
    id: '2',
  },
  {
    title: 'Title 3',
    text: 'Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more.',
    filePath: '',
    id: '3',
  },
];

const News = () => {
  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-8">
      <SectionHeader title="The news" />
      <SearchForm />

      {news.map((newItem) => (
        <NewItem {...newItem} />
      ))}
    </div>
  );
};

export default News;
