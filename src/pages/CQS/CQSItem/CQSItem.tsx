import Button from 'components/Button';
import Loader from 'components/Loader';
import { useAppSelector } from 'store';
import { CQSBody } from 'store/cqs/cqs.types';
import { useDeleteCQSItemMutation } from 'store/cqs/cqsSlice';

const CQSItem: React.FC<CQSBody> = ({ title, user, text, id }) => {
  const { role, email } = useAppSelector((state) => state.user);
  const [deleteCQS, { isLoading }] = useDeleteCQSItemMutation();

  const handleDelete = () => {
    deleteCQS({ id });
  };

  return (
    <div className="relative flex w-full flex-col gap-4 rounded-xl bg-white p-9">
      <Loader isVisible={isLoading} />
      <div className="absolute -top-4 -right-6 flex gap-2 rounded-xl">
        {/* {email === user.email && <Button label={'Edit'} onClick={handleEdit} styleForm={'pill'} size="base" />} */}
        {(role === 'admin' || email === user.email) && (
          <Button label={'Delete'} disabled={isLoading} onClick={handleDelete} styleForm={'pill'} size="base" />
        )}
      </div>
      <h2 className="border-b-2 border-b-orange text-center text-3xl">{title}</h2>
      <h4 className="text-center font-bold">{user.username}</h4>
      <p className="text-justify">{text}</p>
    </div>
  );
};

export default CQSItem;
