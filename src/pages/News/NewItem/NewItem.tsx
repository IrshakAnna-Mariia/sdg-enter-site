import { useNavigate } from 'react-router-dom';

import { PathName } from 'enums/pathNames';
import Button from 'components/Button';
import DefaultNewsIcon from 'icons/defaultNewsIcon.png';

import { NewItemProps } from './newItem.types';
import classNames from 'classnames';
import { useDeleteNewsItemMutation } from 'store/news/newsSlice';
import { useAppSelector } from 'store';
import Loader from 'components/Loader';

const NewItem: React.FC<NewItemProps> = ({ title, text, picture_news, id, isFullVersion }) => {
  const navigate = useNavigate();
  const { role } = useAppSelector((state) => state.user);
  const [deleteNews, { isLoading }] = useDeleteNewsItemMutation();

  const textClasses = classNames('text-justify text-base', !isFullVersion && 'max-h-24 overflow-hidden');
  const deleteAndEditButtonsClassNames = classNames(
    'flex gap-2 rounded-xl',
    isFullVersion ? 'pt-6' : 'absolute -top-4 -right-6',
  );

  const handleClickViewNewsItem = () => {
    navigate(`${PathName.News}/${id}`);
  };

  const handleDelete = () => {
    id && deleteNews({ id });
  };

  const handleEdit = () => {
    id && navigate(`${PathName.NewsEdit}/${id}`);
  };

  return (
    <div className="relative flex w-full justify-between gap-4 rounded-xl bg-white p-9">
      <Loader isVisible={isLoading} />
      <div className="flex w-1/2 flex-col gap-8">
        {!isFullVersion && <h2 className="text-2xl font-bold">{title}</h2>}
        <div className="flex h-full flex-col justify-between">
          <div>
            <p className={textClasses}>{text}</p>
            {!isFullVersion && <p className="text-base">...</p>}
          </div>
          {role === 'admin' && (
            <div className={deleteAndEditButtonsClassNames}>
              <Button label={'Edit'} onClick={handleEdit} styleForm={'pill'} size="base" />
              <Button label={'Delete'} onClick={handleDelete} disabled={isLoading} styleForm={'pill'} size="base" />
            </div>
          )}
        </div>
        {!isFullVersion && (
          <Button
            label={'Learn more'}
            onClick={handleClickViewNewsItem}
            styleForm={'pill'}
            size="base"
            className="my-4 justify-self-end pl-8 pr-8 pb-2 pt-2"
            postIcon
          />
        )}
      </div>
      <div>
        <img className="h-72" src={picture_news || DefaultNewsIcon} alt={title} />
      </div>
    </div>
  );
};

export default NewItem;
