import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'index.css';

function App() {
  return (
    <>
      <ToastContainer position="top-center" theme="light" style={{ width: '45%' }} />
      <Outlet />
    </>
  );
}

export default App;
