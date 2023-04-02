import { lazy, Suspense } from 'react';

import { Route } from 'react-router-dom';

import Loader from 'components/Loader';
import App from 'App';

import ErrorPage from './ErrorPage';
// import Main from 'layouts/Main/Main';
import { PathName } from 'enums/pathNames';

const Login = lazy(() => import('pages/Login'));
const Landing = lazy(() => import('pages/Landing'));
const About = lazy(() => import('pages/About'));
const RoadMap = lazy(() => import('pages/RoadMap'));
const Team = lazy(() => import('pages/Team'));
const CQS = lazy(() => import('pages/CQS'));
// const Dashboard = lazy(() => import('pages/Dashboard'));

export const SuspenseWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<Loader isVisible />}>{children}</Suspense>
);

export const routerConfig = (
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    {/* TODO: add then redux will be in the project */}
    {/* <Route element={<SuspenseWrapper children={<Main />} />}>
      <Route
        path="dashboard/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Route> */}
    <Route path="/">
      <Route index element={<SuspenseWrapper children={<Landing />} />} />
      <Route path={PathName.HomePage} element={<SuspenseWrapper children={<Landing />} />} />
      <Route path={PathName.About} element={<SuspenseWrapper children={<About />} />} />
      <Route path={PathName.RoadMap} element={<SuspenseWrapper children={<RoadMap />} />} />
      <Route path={PathName.Team} element={<SuspenseWrapper children={<Team />} />} />
      <Route path={PathName.CQS} element={<SuspenseWrapper children={<CQS />} />} />
      <Route path={PathName.Login} element={<SuspenseWrapper children={<Login />} />} />
      {/* <Route path={PathName.CreateNewPassword} element={<SuspenseWrapper children={<CreateNewPassword />} />} />
      <Route path={PathName.ForgotPassword} element={<SuspenseWrapper children={<ForgotPassword />} />} /> */}
    </Route>
  </Route>
);
