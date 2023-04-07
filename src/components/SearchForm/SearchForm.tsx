import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import { ReactComponent as SearchIcon } from 'icons/searchIcon.svg';

import { CATEGORIES } from './searchForm.settings';

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', defaultValues: { keyword: '', category: CATEGORIES[0].value } });
  const onSubmit = (data: {}) => console.log(data);
  return (
    <form className="relative mb-16 flex w-full rounded-xl bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
      <SearchIcon className="absolute top-8 left-8 h-4 w-4" />
      <div className="w-1/2">
        <input
          className="h-12 w-full rounded-3xl bg-gray-200 pl-12 pr-4 outline-none focus:shadow-md"
          placeholder="Enter title or keywords..."
          {...register('keyword', { required: true })}
        />
        {errors.keyword && <span className="pl-4 pt-2 text-sm text-orange">This field is required</span>}
      </div>
      <div className="flex w-1/2 justify-between gap-4 px-4">
        <div className="w-full">
          <select
            {...register('category', { required: true })}
            placeholder="Select category"
            className="h-12 w-full  select-none rounded-3xl border border-gray-200  bg-white px-4 shadow-sm outline-none ring-0 focus:border-gray-300 focus:shadow-xl focus:ring-0 focus:ring-offset-0"
          >
            {CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          {errors.category && <span className="pl-4 pt-2 text-sm text-orange">This field is required</span>}
        </div>
        <Button label={'Search'} onClick={() => {}} styleForm={'pill'} />
      </div>
    </form>
  );
};

export default SearchForm;
