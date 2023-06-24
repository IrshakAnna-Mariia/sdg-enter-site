import Button from 'components/Button';
import { useAppSelector } from 'store';
import { CQSBody } from 'store/cqs/cqs.types';

const CQSItem: React.FC<CQSBody> = ({ title, user, text }) => {
  const { role } = useAppSelector((state) => state.user);

  const handleEdit = () => {};
  const handleDelete = () => {};


  return (
    <div className="relative flex w-full flex-col gap-4 rounded-xl bg-white p-9">
    {role === 'admin' && (
      <div className="flex gap-2 rounded-xl absolute -top-4 -right-6">
        <Button label={'Edit'} onClick={handleEdit} styleForm={'pill'} size="base" />
        <Button label={'Delete'} onClick={handleDelete} styleForm={'pill'} size="base" />
      </div>
    )}
      <h2 className="border-b-2 border-b-orange text-center text-3xl">{title}</h2>
      <h4 className="text-center font-bold">{user.username}</h4>
      <p className="text-justify">{text}</p>
    </div>
  );
};

export default CQSItem;
