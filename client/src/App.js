import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard, Landing, Error, Register } from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
  },
  {
    path: '/error',
    element: <Error />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
