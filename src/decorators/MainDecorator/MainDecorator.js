import React from 'react';
import {Layout} from 'antd';
import {Route, Switch, BrowserRouter as Router, useHistory} from 'react-router-dom';
import {Login} from '@pages/Login/Login';
import {getToken} from '@/rootSelector';
import styled from 'styled-components';
import {MyImagesPage} from '@pages/MyImagesPage/MyImagesPage';
import {ViralImages} from '@pages/ViralImages/ViralImages';
import {FavoriteImagesPage} from '@pages/FavoriteImagesPage/FavoriteImagesPage';
const {Content, Footer} = Layout;
import './MainDecorator.css';
import {Sidebar} from '@components/Sidebar/Sidebar';
import {MobileSidebar} from '@components/MobileSidebar';

export const MainDecorator = () => {
  const token = getToken();
  const history = useHistory();

  return (
    <Router history={history}>
      <Layout style={{minHeight: '100vh'}}>
        <Sidebar />
        <Layout className="site-layout">
          <MobileSidebar />
          <ContentWrapper>
            <Switch>
              <Route path="/" component={token ? MyImagesPage : Login} exact />
              <Route path="/favorites" component={token ? FavoriteImagesPage : Login} exact />
              <Route path="/viral" component={token ? ViralImages : Login} exact />
              <Route path="/my-images" component={token ? MyImagesPage : Login} exact />
              <Route component={token ? MyImagesPage : Login} />
            </Switch>
          </ContentWrapper>
          <Footer style={{textAlign: 'center'}}>Copyright</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

const ContentWrapper = styled(Content)`
  height: 100%;
  margin: 30px;
  @media (max-width: 600px) {
    margin-top: 100px;
  }
`;
