import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import { ReactComponent as SearchIcon } from 'icons/searchIcon.svg';

import { CATEGORIES } from './searchForm.settings';

const SearchForm = () => {
  const { handleSubmit } = useForm();
  const onSubmit = (data: {}) => console.log(data);
  return (
    <form className="relative flex w-full rounded-xl bg-white p-4 mb-16" onSubmit={handleSubmit(onSubmit)}>
      <SearchIcon className="absolute top-8 left-8 h-4 w-4" />
      <input
        className="h-12 w-1/2 rounded-3xl bg-gray-200 pl-12 pr-4 outline-none"
        placeholder="Article name or keywords..."
      />
      <div className="flex w-1/2 justify-between gap-4 px-4">
        <select className="w-full px-4 rounded-3xl border shadow-sm  border-gray-200 bg-white ring-0 outline-none select-none focus:border-gray-300 focus:ring-0 focus:ring-offset-0" >
        {CATEGORIES.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <Button label={'Search'} onClick={() => {}} styleForm={'pill'} />
      </div>
    </form>
  );
};

export default SearchForm;
