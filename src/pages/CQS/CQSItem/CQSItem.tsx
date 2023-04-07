import { CQSItemProps } from './CQSItem.type';

const CQSItem: React.FC<CQSItemProps> = ({ title, userName, text }) => {
  return (
    <div className="flex flex-col w-full gap-4 rounded-xl bg-white p-9">
      <h2 className="text-center text-3xl border-b-2 border-b-orange">{title}</h2>
      <h4 className="text-center font-bold">{userName}</h4>
      <p className="text-justify">{text}</p>
    </div>
  );
};

export default CQSItem;
