import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLogoutUserMutation } from 'store/api/apiSlice';

const MyProfile = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutUserMutation();

  const handleLogOut = () => {
    logout()
      .unwrap()
      .then(() => {
        navigate(PathName.HomePage);
        toast.success('Logout successfully');
      });
  };

  return (
    <>
      <SectionHeader title="My Profile" />

      <Button label="Log out" onClick={handleLogOut} styleForm="pill" size="lg" className="mx-auto mt-12" />
    </>
  );
};

export default MyProfile;
