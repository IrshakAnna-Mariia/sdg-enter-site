import Button from 'components/Button';
import DefaultNewsIcon from 'icons/defaultNewsIcon.png';

import { NewItemProps } from './newItem.types';

const NewItem: React.FC<NewItemProps> = ({ title, text, filePath }) => {
  return (
    <div className="flex w-full justify-between gap-4 rounded-xl bg-white p-9">
      <div className="flex w-1/2 flex-col gap-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div>
          <p className="max-h-24 overflow-hidden text-base text-justify">{text}</p>
          <p className="text-base">...</p>
        </div>
        <Button
          label={'Learn more'}
          onClick={() => {}}
          styleForm={'pill'}
          size="base"
          className="justify-self-end my-4 pl-8 pr-8 pb-2 pt-2"
          postIcon
        />
      </div>
      <div>
        <img className="h-72" src={filePath || DefaultNewsIcon} alt={title} />
      </div>
    </div>
  );
};

export default NewItem;
