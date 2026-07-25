import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/home-page/ui/HomePage.tsx';
import RegisterPage from '@pages/auth-page/register-page/ui/RegisterPage.tsx';
import Layout from '@app/layouts/Layout.tsx';
import AuthLayout from '@app/layouts/AuthLayout.tsx';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        // {
        //   element: <ProtectedRoute />,
        //   children: [
        //     // {
        //     //   path: 'article',
        //     //   element: <NewsPage />,
        //     // },
        //   ],
        // },
        // {
        //   path: '*',
        //   element: <NotFoundPage />,
        // },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/register',
          element: <RegisterPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
