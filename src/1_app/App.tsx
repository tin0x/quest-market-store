import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@app/layout/Layout.tsx';
import HomePage from '@pages/home-page/ui/HomePage.tsx';

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
        //   path: 'auth',
        //   element: <AuthPage />,
        // },
        // {
        //   element: <ProtectedRoute />,
        //   children: [
        //     // {
        //     //   path: 'news',
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
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
