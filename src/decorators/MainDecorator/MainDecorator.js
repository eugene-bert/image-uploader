import React from 'react';
import {Layout} from 'antd';
import {Route, Switch, BrowserRouter as Router, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Spin} from 'antd';
import {ClipLoader} from 'react-spinners';
import styled from 'styled-components';
import {MyImagesPage} from '@pages/MyImagesPage';
import {ViralImages} from '@pages/ViralImages';
import {FavoriteImagesPage} from '@pages/FavoriteImagesPage';
import {Sidebar} from '@components/Sidebar';
import {MobileSidebar} from '@components/MobileSidebar';
import {Login} from '@pages/Login';
import './MainDecorator.css';
import {getToken} from '@/utils';
const {Content, Footer} = Layout;

export const MainDecorator = () => {
  const history = useHistory();
  const token = getToken();
  const {
    myImagesLoading,
    viralPostsLoading,
    favoriteImagesLoading,
    myImagesError,
    viralPostsError,
    favoriteImagesError,
  } = useSelector(state => state.images);
  const isLoading = myImagesLoading || viralPostsLoading || favoriteImagesLoading;
  const fetchErrors = [myImagesError, viralPostsError, favoriteImagesError];
  
  // check if not forbidden
  if ( fetchErrors.filter(el => el.status === 403).length > 0 ) {
    localStorage.clear();
    window.location.reload();
  }
  
  return (
    <Router history={history}>
      <LoaderWrapper spinning={isLoading} indicator={<ClipLoader size={150} color={'#1890ff'} />}>
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
      </LoaderWrapper>
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

const LoaderWrapper = styled(Spin)`
  position: fixed !important;
  top: 40% !important;
`;
