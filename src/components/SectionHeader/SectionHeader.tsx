import Button from 'components/Button';

import { SectionHeaderProps } from './sectionHeader.types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onAdd, onRemove }) => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="self-center text-center font-chakraPetch text-5xl font-bold text-white">{title}</h2>
      <div className="self-end">
        {onAdd && <Button label={'Add new +'} onClick={onAdd} styleForm={'text'} className="text-white" />}
        {onRemove && <Button label={'Delete'} onClick={onRemove} styleForm={'text'} className="text-orange" />}
      </div>
    </div>
  );
};

export default SectionHeader;
