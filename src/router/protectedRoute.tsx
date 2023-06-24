import { PathName } from 'enums/pathNames';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store';

const ProtectedRoute: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { accessToken } = useAppSelector((state) => state.user);

  if (!accessToken) {
    return <Navigate to={PathName.HomePage} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
