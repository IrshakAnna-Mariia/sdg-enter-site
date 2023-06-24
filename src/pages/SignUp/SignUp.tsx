import { useNavigate } from 'react-router-dom';

import SectionHeader from 'components/SectionHeader';
import { PathName } from 'enums/pathNames';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { ROLES } from './signUp.settings';
import { usePostNewUserMutation } from 'store/api/apiSlice';
import { UserProps } from 'store/user/user.types';
import { toast } from 'react-toastify';
import { useAppSelector } from 'store';

const SignUp = () => {
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((state) => state.user);
  const [createUser] = usePostNewUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      role: ROLES[0].value,
      phone: '',
      birthdate: '',
      first_name: '',
      last_name: '',
    },
  });

  const onSubmit = (data: UserProps) => {
    createUser({ body: data })
      .unwrap()
      .then(() => {
        reset();
        toast.success('Created user successfully');
      });
  };

  const handleLogin = () => {
    navigate(PathName.Login);
  };

  if (accessToken) navigate(PathName.Profile);

  return (
    <form className="flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
      <SectionHeader title={'Sign up'} />

      <div className="mx-auto mb-8 h-px w-3/4 bg-orange" />

      <div className="mx-auto flex w-3/4 flex-col gap-8 rounded-3xl bg-white bg-opacity-50 p-16">
        <div className="flex flex-col">
          <label className="text-lg">User name</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter user name..."
            {...register('username', { required: true })}
          />
          {errors.username && <span className="pl-4 pt-2 text-sm text-orange">User name is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Email</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter email..."
            {...register('email', { required: true })}
          />
          {errors.email && <span className="pl-4 pt-2 text-sm text-orange">Email is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Password</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter password..."
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span className="pl-4 pt-2 text-sm text-orange">Password is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Role</label>
          <select
            {...register('role', { required: true })}
            placeholder="Select role"
            className="h-12 w-full select-none rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl focus:ring-0 focus:ring-offset-0"
          >
            {ROLES.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
          {errors.role && <span className="pl-4 pt-2 text-sm text-orange">Role is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Phone</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter phone..."
            type="tel"
            {...register('phone', { required: true })}
          />
          {errors.phone && <span className="pl-4 pt-2 text-sm text-orange">Phone is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Birthday</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter birthdate..."
            type="date"
            {...register('birthdate', { required: true })}
          />
          {errors.birthdate && <span className="pl-4 pt-2 text-sm text-orange">Birthday is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-lg">First name</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter first name..."
            {...register('first_name', { required: true })}
          />
          {errors.first_name && <span className="pl-4 pt-2 text-sm text-orange">First name is required</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-lg">Last name</label>
          <input
            className="h-12 w-full rounded-xl bg-gray-300 px-4 outline-none focus:shadow-xl"
            placeholder="Enter last name..."
            {...register('last_name', { required: true })}
          />
          {errors.last_name && <span className="pl-4 pt-2 text-sm text-orange">Last name is required</span>}
        </div>

        {!!Object.entries(errors).length && (
          <p className="mx-auto max-w-fit py-2 text-lg text-orange underline decoration-red-500">
            Please enter a valid data
          </p>
        )}

        <Button label={'Sign up'} styleForm={'pill'} className="mx-auto" size="lg" />
      </div>
      <button
        type="button"
        className="my-2 mx-auto max-w-fit border-b border-b-orange text-sm text-white"
        onClick={handleLogin}
      >
        Already have an account? Log In
      </button>
    </form>
  );
};

export default SignUp;
