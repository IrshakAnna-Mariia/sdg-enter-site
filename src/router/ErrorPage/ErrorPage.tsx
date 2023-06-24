import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { PathName } from 'enums/pathNames';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToTheHomePage = () => {
    navigate(PathName.HomePage);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg text-white shadow">
      <h1 className="text-white-700 mt-8 text-3xl font-bold">Error 404</h1>
      <h2 className="mt-2 mb-11 text-center text-base text-gray-500">Something went wrong...</h2>
      <Button onClick={goToTheHomePage} size="lg" label={'Go to home page'} styleForm={'text'} className="underline" />
    </div>
  );
};

export default ErrorPage;
