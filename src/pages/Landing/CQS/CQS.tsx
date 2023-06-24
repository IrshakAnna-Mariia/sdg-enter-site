import Button from 'components/Button';
import Loader from 'components/Loader';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';
import SpaceX from 'icons/spacex.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from 'store';
import { useCreateCQSItemMutation } from 'store/cqs/cqsSlice';

const CQS = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const [createCQS, { isLoading }] = useCreateCQSItemMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      text: '',
    },
  });

  const onSubmit = (data: { text: string; title: string }) => {
    createCQS({ ...data, user })
      .unwrap()
      .then(() => {
        navigate(PathName.CQS);
        toast.success('Created successfully');
      });
  };

  return (
    <form className="mt-24 flex flex-col items-center gap-8" onSubmit={handleSubmit(onSubmit)}>
      <Loader isVisible={isLoading} />
      <SectionHeader title={'CQS'} />

      <div className="mx-auto flex w-3/4 flex-col items-center gap-8 rounded-3xl bg-white bg-opacity-50 p-16">
        <p className="text-3xl font-semibold">COMMENTS QUESTIONS SUGGESTIONS</p>

        <div className="flex w-full justify-between gap-8">
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col">
              <label className="text-lg">Topic</label>
              <input
                className="h-12 w-full rounded-3xl bg-gray-300 px-4 outline-none focus:shadow-xl"
                placeholder="Enter title..."
                {...register('title', { required: true })}
              />
              {errors.title && <span className="pl-4 pt-2 text-sm text-orange">Topic is required</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-lg">Comment</label>
              <textarea
                className="w-full rounded-3xl bg-gray-300 px-4 outline-none focus:border-gray-300 focus:shadow-xl focus:ring-0 focus:ring-offset-0"
                placeholder="Enter comment..."
                {...register('text', { required: true })}
                rows={7}
                maxLength={300}
              />
              {errors.text && <span className="pl-4 pt-2 text-sm text-orange">Comment is required</span>}
            </div>
          </div>
          <img className="w-96 rounded rounded-3xl" alt="spaceX" src={SpaceX} />
        </div>

        {!user.accessToken && <span className="text-lg text-orange">You should be logged in</span>}

        {!!Object.entries(errors).length && (
          <p className="mx-auto max-w-fit py-2 text-lg text-orange underline decoration-red-500">
            Please enter a valid data
          </p>
        )}

        <Button
          id={'create-cqs'}
          disabled={!!Object.entries(errors).length || !user.accessToken || isLoading}
          label={'Submit'}
          styleForm={'pill'}
          size="base"
          className="px-14"
        />
      </div>
    </form>
  );
};

export default CQS;
