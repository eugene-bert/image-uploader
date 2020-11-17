import React from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import {FolderFilled, HeartFilled, FireFilled, LogoutOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
const {Header} = Layout;

export const MobileSidebar = () => {
  const location = useSelector(state => state.router).location.pathname;

  const moveToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <MobileMenuWrapper>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location === '/' ? '/my-images' : location]}>
        <Menu.Item key="/my-images" icon={<FolderFilled style={{fontSize: '18px', marginRight: 0}} />} onClick={() => moveToTop()}>
          <Link to="/my-images" />
        </Menu.Item>
        <Menu.Item key="/favorites" icon={<HeartFilled style={{fontSize: '18px', marginRight: 0}} />} onClick={() => moveToTop()}>
          <Link to="/favorites" />
        </Menu.Item>
        <Menu.Item key="/viral" icon={<FireFilled style={{fontSize: '18px', marginRight: 0}} />} onClick={() => moveToTop()}>
          <Link to="/viral" />
        </Menu.Item>
        <Menu.Item
          icon={<LogoutOutlined style={{fontSize: '18px'}} />}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        />
      </Menu>
    </MobileMenuWrapper>
  );
};

const MobileMenuWrapper = styled(Header)`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 2;
    justify-content: center;
  }
`;
