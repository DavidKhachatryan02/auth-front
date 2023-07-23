import { Menu, Row } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, UserAddOutlined, LoginOutlined } from "@ant-design/icons";
import { ROOT_PATHS } from "../constants/paths";

const ITEMS = [
    {
      key: 0,
      icon: <HomeOutlined />,
      label: <Link to={ROOT_PATHS.HOME}>Home</Link>,
      path: ROOT_PATHS.HOME,
    },
    {
      key: 1,
      icon: <UserAddOutlined />,
      label: <Link to={ROOT_PATHS.REGISTER}>Register</Link>,
      path: ROOT_PATHS.REGISTER,
    },
    {
      key: 2,
      icon: <LoginOutlined />,
      label: <Link to={ROOT_PATHS.LOGIN}>Login</Link>,
      path: ROOT_PATHS.LOGIN,
    },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const pathIndex = ITEMS.find(({path}) => path === pathname)?.key || 0;
  
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[`${pathIndex}`]}
      items={ITEMS}
    />
  );
};

export default Navbar;
