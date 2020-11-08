import React, {useState} from 'react';
import logo from '@/assets/icons/logo';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {
  FolderOutlined,
  HeartOutlined,
  FireOutlined,
  LogoutOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
const {Sider} = Layout;

export const Sidebar = props => {
  const [isCollapsed, setCollapsed] = useState(false);
  const location = useSelector(state => state.router).location.pathname;

  return (
    <SiderWrapper
      trigger={isCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
      collapsible
      collapsed={isCollapsed}
      onCollapse={() => setCollapsed(!isCollapsed)}
    >
      <LogoWrapper className="logo" isCollapsed={isCollapsed}>
        <img src={logo} alt="" width={200} />
      </LogoWrapper>
      <Menu defaultSelectedKeys={[location === '/' ? '/my-images' : location]} theme="dark" mode="inline">
        <Menu.Item key="/my-images" icon={<FolderOutlined />}>
          <Link to="/my-images">My images</Link>
        </Menu.Item>
        <Menu.Item key="/favorites" icon={<HeartOutlined />}>
          <Link to="/favorites">Favorites</Link>
        </Menu.Item>
        <Menu.Item key="/viral" icon={<FireOutlined />}>
          <Link to="/viral">Viral</Link>
        </Menu.Item>
        <Menu.Item
          icon={<LogoutOutlined />}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Sign out
        </Menu.Item>
      </Menu>
    </SiderWrapper>
  );
};

const LogoWrapper = styled.div`
  display: ${props => (props.isCollapsed ? 'none' : 'block')};
  background: #fff;
`;

const SiderWrapper = styled(Sider)`
  @media (max-width: 600px) {
    display: none;
  }
`;
