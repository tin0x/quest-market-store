import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@pages/home-page/ui/HomePage.tsx';
import RegisterPage from '@pages/auth-page/register-page/ui/RegisterPage.tsx';
import Layout from '@app/layouts/Layout.tsx';
import AuthLayout from '@app/layouts/AuthLayout.tsx';
import LoginPage from '@pages/auth-page/login-page/ui/LoginPage.tsx';
import AuthProvider from '@app/providers/auth-provider/AuthProvider.tsx';
import ProtectedRoute from '@features/auth/ui/ProtectedRoute.tsx';
import InvalidPathPage from '@pages/invalid-path-page/ui/InvalidPathPage.tsx';
import ErrorBoundaryPage from '@pages/error-boundary-page/ui/ErrorBoundaryPage.tsx';
import ToastWidget from '@widgets/toast-widget/ui/ToastWidget.tsx';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundaryPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '*',
          element: <InvalidPathPage />,
        },
        {
          element: <ProtectedRoute />,
          children: [
            // {
            //   path: 'article',
            //   element: <NewsPage />,
            // },
          ],
        },
      ],
    },
    {
      element: <AuthLayout />,
      errorElement: <ErrorBoundaryPage />,
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
      <ToastWidget />
    </AuthProvider>
  );
};

export default App;
