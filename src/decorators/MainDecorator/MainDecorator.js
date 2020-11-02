import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {
  FolderOutlined,
  FireOutlined,
  LoginOutlined
} from '@ant-design/icons';
import {Typography} from 'antd';
import {Link, Route, Switch} from 'react-router-dom';
import {Login} from '../../pages/Login/Login';
import {getToken} from '../../rootSelector';
import styled from 'styled-components';
import {MyImages} from '../../pages/MyImages/MyImages';
import {ViralImages} from '../../pages/ViralImages/ViralImages';
const {Content, Footer, Sider} = Layout;

export const MainDecorator = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const token = getToken();
  const singleMode = process.env.REACT_APP_SINGLE_USER_MODE;

  return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={isCollapsed} onCollapse={() => setCollapsed(!isCollapsed)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item icon={<FireOutlined />}>
              <Link to="/viral">Viral</Link>
            </Menu.Item>
            <Menu.Item icon={<FolderOutlined />}>
              <Link to="/my-images">My images</Link>
            </Menu.Item>
            <Menu.Item icon={<LoginOutlined />} onClick={() => {
              localStorage.clear()
              window.location.reload()
              }}>
              Sign out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <ContentWrapper>
            <Switch>
              <Route path="/" component={token ? MyImages : Login} exact/>
              <Route path="/viral" component={token ? ViralImages : Login} />
              <Route path="/my-images" component={token ? MyImages : Login} />
              <Route component={token ? MyImages : Login} />
            </Switch>
          </ContentWrapper>
          <Footer style={{textAlign: 'center'}}>Copyright</Footer>
        </Layout>
      </Layout>
  );
};

const ContentWrapper = styled(Content)`
  height: 100%;
  margin: 30px;
`;
