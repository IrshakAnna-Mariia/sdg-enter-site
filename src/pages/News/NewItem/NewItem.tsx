import { useNavigate } from 'react-router-dom';

import { PathName } from 'enums/pathNames';
import Button from 'components/Button';
import DefaultNewsIcon from 'icons/defaultNewsIcon.png';

import { NewItemProps } from './newItem.types';
import classNames from 'classnames';

const NewItem: React.FC<NewItemProps> = ({ title, text, picture_news, id, isFullVersion }) => {
  const navigate = useNavigate();

  const textClasses = classNames('text-justify text-base', !isFullVersion && 'max-h-24 overflow-hidden');

  const handleClickViewNewsItem = () => {
    navigate(`${PathName.News}/${id}`);
  };

  return (
    <div className="flex w-full justify-between gap-4 rounded-xl bg-white p-9">
      <div className="flex w-1/2 flex-col gap-8">
        {!isFullVersion && <h2 className="text-2xl font-bold">{title}</h2>}
        <div>
          <p className={textClasses}>{text}</p>
          {!isFullVersion && <p className="text-base">...</p>}
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
