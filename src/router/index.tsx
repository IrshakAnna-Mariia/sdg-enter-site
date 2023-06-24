import { lazy, Suspense } from 'react';

import { Route } from 'react-router-dom';

import Loader from 'components/Loader';
import App from 'App';

import ErrorPage from './ErrorPage';
import Main from 'layouts/Main/Main';
import { PathName } from 'enums/pathNames';
import ProtectedRoute from './protectedRoute';

const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const Landing = lazy(() => import('pages/Landing'));
const About = lazy(() => import('pages/About'));
const RoadMap = lazy(() => import('pages/RoadMap'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NewsEdit = lazy(() => import('pages/NewsEdit'));
const News = lazy(() => import('pages/News'));
const AddNewCQS = lazy(() => import('pages/AddNewCQS'));
const CQS = lazy(() => import('pages/CQS'));
const MyProfile = lazy(() => import('pages/MyProfile'));

export const SuspenseWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<Loader isVisible />}>{children}</Suspense>
);

export const routerConfig = (
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route element={<SuspenseWrapper children={<Main />} />}>
      <Route path={PathName.HomePage} element={<SuspenseWrapper children={<Landing />} />} />
      <Route path={PathName.About} element={<SuspenseWrapper children={<About />} />} />
      <Route path={`${PathName.News}/:newsId`} element={<SuspenseWrapper children={<NewsPage />} />} />
      <Route path={`${PathName.NewsEdit}/:newsId`} element={<SuspenseWrapper children={<NewsEdit />} />} />
      <Route path={PathName.NewsCreate} element={<SuspenseWrapper children={<NewsEdit />} />} />
      <Route path={PathName.News} element={<SuspenseWrapper children={<News />} />} />
      <Route path={PathName.RoadMap} element={<SuspenseWrapper children={<RoadMap />} />} />
      <Route path={PathName.CQS} element={<SuspenseWrapper children={<CQS />} />} />
      <Route path={PathName.Login} element={<SuspenseWrapper children={<Login />} />} />
      <Route path={PathName.SignUp} element={<SuspenseWrapper children={<SignUp />} />} />
      <Route
        path={PathName.AddCQS}
        element={
          <ProtectedRoute>
            <SuspenseWrapper children={<AddNewCQS />} />
          </ProtectedRoute>
        }
      />
      <Route
        path={PathName.Profile}
        element={
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        }
      />
    </Route>
  </Route>
);
