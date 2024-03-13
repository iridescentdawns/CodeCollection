import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export const Sidebar = () => (
  <ProSidebar>
    <Menu>
      <MenuItem component={<Link to="/" />}> Home </MenuItem>
    </Menu>
  </ProSidebar>
);
