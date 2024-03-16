import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './AppLayout';

const routesConfig = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <div>Home</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig);

export const Router = () => <RouterProvider router={router} />;
