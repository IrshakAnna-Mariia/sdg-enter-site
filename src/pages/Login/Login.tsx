import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';

const Login = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {};

  const handleSignUpAccount = () => {
    navigate(PathName.SignUp);
  }

  return (
    <div className="w-full flex flex-col">
      <SectionHeader title={'Login'} />

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

        <Button label={'Log in'} onClick={handleSubmit} styleForm={'pill'} className="mx-auto" size="lg" />
      </div>
      <button className="my-2 mx-auto max-w-fit border-b border-b-orange text-sm text-white" onClick={handleSignUpAccount}>
        Don't have account? Click here!
      </button>
    </div>
  );
};

export default Login;
