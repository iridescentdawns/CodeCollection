import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/sidebar';

export const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};
