import { ReviewCarousel } from '@org/review-carousel';
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
      {
        path: 'reviews',
        element: <ReviewCarousel />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig);

export const Router = () => <RouterProvider router={router} />;
