import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/home-page/ui/HomePage.tsx';
import RegisterPage from '@pages/auth-page/register-page/ui/RegisterPage.tsx';
import Layout from '@app/layouts/Layout.tsx';
import AuthLayout from '@app/layouts/AuthLayout.tsx';
import LoginPage from '@pages/auth-page/login-page/ui/LoginPage.tsx';
import AuthProvider from '@app/providers/auth-provider/AuthProvider.tsx';

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
        {
          path: '/login',
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={routes} />;
    </AuthProvider>
  );
};

export default App;
