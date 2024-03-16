import { Menu, MenuItem, Sidebar as ProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export const Sidebar = () => (
  <ProSidebar>
    <Menu>
      <MenuItem component={<Link to="/" />}> Home </MenuItem>
      <MenuItem component={<Link to="/reviews" />}> Review Carousel </MenuItem>
    </Menu>
  </ProSidebar>
);
