import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import dayjs from 'dayjs';
import { PathName } from 'enums/pathNames';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store';
import { clearUser } from 'store/user/userSlice';

const MyProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleLogOut = () => {
    if (user.refreshToken) {
      dispatch(clearUser());
      navigate(PathName.HomePage);
      toast.success('Logout successfully');
    }
  };

  useEffect(() => {
    if (!user.accessToken) navigate(PathName.Login);
  }, [navigate, user.accessToken]);

  return (
    <>
      <SectionHeader title="My Profile" />

      <div className="mx-auto flex w-3/4 flex-col gap-4 text-white">
        <div className="align-center flex justify-between">
          <p className="min-w-fit">First name</p>
          <div className="mx-3 w-full border-b border-dashed border-white" />
          <p className="min-w-fit">{user.first_name}</p>
        </div>
        <div className="flex justify-between">
          <p className="min-w-fit">Last name</p>
          <div className="mx-3 w-full border-b border-dashed border-white" />
          <p className="min-w-fit">{user.last_name}</p>
        </div>
        <div className="flex justify-between">
          <p className="min-w-fit">Username</p>
          <div className="mx-3 w-full border-b border-dashed border-white" />
          <p className="min-w-fit">{user.username}</p>
        </div>
        <div className="flex justify-between">
          <p className="min-w-fit">Email</p>
          <div className="mx-3 w-full border-b border-dashed border-white" />
          <p className="min-w-fit">{user.email}</p>
        </div>
        <div className="flex justify-between">
          <p className="min-w-fit">Birthdate</p>
          <div className="mx-3 w-full border-b border-dashed border-white" />
          <p className="min-w-fit">{dayjs(user.birthdate, 'YYYY-MM-DD').format('DD MMMM YYYY')}</p>
        </div>
        <div className="flex justify-between">
          <p className="min-w-fit">Phone</p>
          <div className="mx-3 w-full border-b border-dashed border-white" />
          <p className="min-w-fit">{user.phone}</p>
        </div>
        <div className="flex justify-between">
          <p className="min-w-fit">Role</p>
          <div className="mx-3 w-full border-b border-dashed border-white" />
          <p className="min-w-fit">{user.role}</p>
        </div>
      </div>

      <Button label="Log out" onClick={handleLogOut} styleForm="pill" size="lg" className="mx-auto mt-12" />
    </>
  );
};

export default MyProfile;
