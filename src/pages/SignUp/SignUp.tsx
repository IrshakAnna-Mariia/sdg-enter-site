import { useNavigate } from 'react-router-dom';

import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';
import Button from 'components/Button';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {};

  const handleLogin = () => {
    navigate(PathName.Login);
  };

  return (
    <div className="flex w-full flex-col">
      <SectionHeader title={'Sign up'} />

      <div className="mx-auto mb-8 h-px w-3/4 bg-orange" />

      <div className="mx-auto flex w-3/4 flex-col gap-8 rounded-3xl bg-white bg-opacity-50 p-16">
        <div className="flex flex-col">
          <label className="text-lg">User name</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter user name..."
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Password</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter password..."
          />
        </div>

        <Button label={'Sign up'} onClick={handleSubmit} styleForm={'pill'} className="mx-auto" size="lg" />
      </div>
      <button
        className="my-2 mx-auto max-w-fit border-b border-b-orange text-sm text-white"
        onClick={handleLogin}
      >
        Already have an account? Log In
      </button>
    </div>
  );
};

export default SignUp;
