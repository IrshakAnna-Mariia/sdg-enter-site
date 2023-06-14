import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';
import { useLoginUserMutation } from 'store/api/apiSlice';
import { LoginProps } from 'store/user/user.types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginProps) => {
    login({ body: data })
      .unwrap()
      .then(() => toast.success('Login successfully'));
  };

  const handleSignUpAccount = () => {
    navigate(PathName.SignUp);
  };

  return (
    <form className="flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
      <SectionHeader title={'Login'} />

      <div className="mx-auto mb-8 h-px w-3/4 bg-orange" />

      <div className="mx-auto flex w-3/4 flex-col gap-8 rounded-3xl bg-white bg-opacity-50 p-16">
        <div className="flex flex-col">
          <label className="text-lg">User name</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter user name..."
            {...register('username', { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Password</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter password..."
            {...register('password', { required: true })}
          />
        </div>

        {!!Object.entries(errors).length && (
          <p className="mx-auto max-w-fit py-2 text-lg text-orange underline decoration-red-500">
            Please enter a valid data
          </p>
        )}

        <Button label={'Log in'} styleForm={'pill'} className="mx-auto" size="lg" />
      </div>
      <button
        className="my-2 mx-auto max-w-fit border-b border-b-orange text-sm text-white"
        onClick={handleSignUpAccount}
      >
        Don't have account? Click here!
      </button>
    </form>
  );
};

export default Login;
