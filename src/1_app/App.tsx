import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@app/layouts/Layout.tsx';
import AuthLayout from '@app/layouts/AuthLayout.tsx';
import AuthProvider from '@app/providers/auth-provider/AuthProvider.tsx';
import { ToastWidget } from '@widgets/toast-widget';
import { ErrorBoundaryPage } from '@pages/error-boundary-page';
import { HomePage } from '@pages/home-page';
import { InvalidPathPage } from '@pages/invalid-path-page';
import { RegisterPage } from '@pages/register-page';
import { LoginPage } from '@pages/login-page';
import { MyAccountWidget } from '@widgets/my-account-widget';
import { ProfilePage } from '@pages/profile-page';
import { WishlistWidget } from '@widgets/wishlist-widget';
import { PersonalInformationWidget } from '@widgets/personal-information-widget';
import ProtectedRoute from '@app/router/ProtectedRoute.tsx';
import CartPage from '@pages/cart-page/ui/CartPage.tsx';

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
            {
              path: 'profile',
              element: <ProfilePage />,
              children: [
                {
                  path: 'my-account',
                  element: <MyAccountWidget />,
                },
                {
                  path: 'wishlist',
                  element: <WishlistWidget />,
                },
                {
                  path: 'personal-information',
                  element: <PersonalInformationWidget />,
                },
              ],
            },
            {
              path: 'cart',
              element: <CartPage />,
            },
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
