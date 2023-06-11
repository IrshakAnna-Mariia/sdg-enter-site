import SectionHeader from 'components/SectionHeader';
import NewItem from 'pages/News/NewItem';

const newsItem = {
  title: 'Title 1',
  text: 'Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more. Long text. Some new sentence. And one more.',
  picture_news: '',
  id: 1,
};
const NewsPage = () => {
  return (
    <div className="mx-auto flex w-3/4 flex-col items-center gap-8">
      <SectionHeader title="Title 1" />

      <NewItem {...newsItem} isFullVersion />
    </div>
  );
};

export default NewsPage;
