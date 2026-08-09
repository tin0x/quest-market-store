import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@app/layouts/Layout.tsx';
import AuthLayout from '@app/layouts/AuthLayout.tsx';
import AuthProvider from '@app/providers/auth-provider/AuthProvider.tsx';
import { ProtectedRoute } from '@features/auth';
import { ToastWidget } from '@widgets/toast-widget';
import { ErrorBoundaryPage } from '@pages/error-boundary-page';
import { HomePage } from '@pages/home-page';
import { InvalidPathPage } from '@pages/invalid-path-page';
import { RegisterPage } from '@pages/register-page';
import { LoginPage } from '@pages/login-page';

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
