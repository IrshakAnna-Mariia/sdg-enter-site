import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from 'store';
import { NewsBody } from 'store/news/news.types';
import {
  useCreateNewsItemMutation,
  useLazyGetNewsItemByIdQuery,
  useUpdateNewsItemMutation,
} from 'store/news/newsSlice';

const NewsEdit = () => {
  const navigate = useNavigate();
  const { newsId = '' } = useParams<{ newsId: string }>();
  const { role } = useAppSelector((state) => state.user);
  const [file, setFile] = useState<string | undefined | null>();
  const [pictureNews, setPictureNews] = useState<Blob | MediaSource>();

  const [getNewsItemData, { isLoading: isLoadGetNews }] = useLazyGetNewsItemByIdQuery();
  const [updateNews, { isLoading: isLoadUpdate }] = useUpdateNewsItemMutation();
  const [createNews, { isLoading: isLoadCreate }] = useCreateNewsItemMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      text: '',
    },
  });

  const isLoading = isLoadUpdate || isLoadCreate || isLoadGetNews;

  const onSubmit = (data: NewsBody) => {
    (newsId
      ? updateNews({ body: { ...data, picture_news: pictureNews || null }, id: newsId })
      : createNews({ body: { ...data, picture_news: pictureNews || null } })
    )
      .unwrap()
      .then(() => {
        navigate(PathName.News);
        toast.success(`${newsId ? 'Updated' : 'Created'} successfully`);
      });
  };

  useEffect(() => {
    if (newsId)
      getNewsItemData({ id: newsId })
        .unwrap()
        .then((data) => {
          reset({ title: data.title, text: data.text });
          setFile(data.picture_news);
        });
  }, [getNewsItemData, newsId, reset]);

  return (
    <form className="flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
      <SectionHeader title={isLoading ? 'Loading...' : newsId ? 'Update news' : 'Create news'} />

      <div className="mx-auto mb-8 h-px w-3/4 bg-orange" />
      <div className="mx-auto flex w-3/4 flex-col gap-8 rounded-3xl bg-white bg-opacity-50 p-16">
        <div className="flex flex-col">
          <label className="text-lg">Title</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter user title..."
            maxLength={64}
            {...register('title', { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Text</label>
          <textarea
            className="h-36 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter password..."
            maxLength={640}
            {...register('text', { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Picture news</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter password..."
            maxLength={640}
            type="file"
            onChange={(event) => {
              const targetFile = event.target.files?.[0];
              if (targetFile) {
                setFile(URL.createObjectURL(targetFile));
                setPictureNews(targetFile);
              }
            }}
          />
          {file && <img src={file} alt="picture_news" />}
        </div>

        {!!Object.entries(errors).length && (
          <p className="mx-auto max-w-fit py-2 text-lg text-orange underline decoration-red-500">
            Please enter a valid data
          </p>
        )}

        <Button label={'Submit'} disabled={role !== 'admin'} styleForm={'pill'} className="mx-auto" size="lg" />

        {role !== 'admin' && (
          <p className="mx-auto max-w-fit py-2 text-lg text-orange underline decoration-red-500">
            You should be an admin
          </p>
        )}
      </div>
    </form>
  );
};

export default NewsEdit;
