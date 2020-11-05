import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {
  FolderOutlined,
  ArrowLeftOutlined,
  FireOutlined,
  LogoutOutlined,
  HeartOutlined,
  ArrowRightOutlined,
  FireFilled,
  HeartFilled,
  FolderFilled
} from '@ant-design/icons';
import {Link, Route, Switch, BrowserRouter as Router, useHistory} from 'react-router-dom';
import {Login} from '@pages/Login/Login';
import {getToken} from '@/rootSelector';
import styled from 'styled-components';
import {MyImages} from '@pages/MyImages/MyImages';
import {ViralImages} from '@pages/ViralImages/ViralImages';
import {FavoriteImages} from '@pages/FavoriteImages/FavoriteImages';
import {useSelector} from 'react-redux';
const {Content, Footer, Header, Sider} = Layout;
import logo from '../../assets/icons/logo'
import './MainDecorator.css';

export const MainDecorator = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const token = getToken();
  const history = useHistory();
  const location = useSelector(state => state.router).location.pathname;

  return (
    <Router history={history}>
      <Layout style={{minHeight: '100vh'}}>
        <SiderWrapper
          trigger={isCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
          collapsible
          collapsed={isCollapsed}
          onCollapse={() => setCollapsed(!isCollapsed)}
        >
          <LogoWrapper className="logo" isCollapsed={isCollapsed}>
            <img src={logo} alt="" width={200} />
          </LogoWrapper>
          <Menu defaultSelectedKeys={[location === '/' ? "/my-images" : location]} theme="dark" mode="inline">
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
        <Layout className="site-layout">
          <MobileMenuWrapper>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location === '/' ? "/my-images" : location]}>
              <Menu.Item key="/my-images" icon={<FolderFilled style={{fontSize: '18px'}} />}>
                <Link to="/my-images" />
              </Menu.Item>
              <Menu.Item key="/favorites" icon={<HeartFilled  style={{fontSize: '18px'}}/>}>
                <Link to="/favorites" />
              </Menu.Item>
              <Menu.Item key="/viral" icon={<FireFilled style={{fontSize: '18px'}} />}>
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
          <ContentWrapper>
            <Switch>
              <Route path="/" component={token ? MyImages : Login} exact />
              <Route path="/favorites" component={token ? FavoriteImages : Login} exact />
              <Route path="/viral" component={token ? ViralImages : Login} exact />
              <Route path="/my-images" component={token ? MyImages : Login} exact />
              <Route component={token ? MyImages : Login} />
            </Switch>
          </ContentWrapper>
          <Footer style={{textAlign: 'center'}}>Copyright</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

const SiderWrapper = styled(Sider)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const ContentWrapper = styled(Content)`
  height: 100%;
  margin: 30px;
`;

const LogoWrapper = styled.div`
  display: ${props => (props.isCollapsed ? 'none' : 'block')};
  background: #fff;
`;

const MobileMenuWrapper = styled(Header)`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
