import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from '../../pages/Login/Login';
import {useStore} from 'react-redux';
import {Main} from '../../pages/Main/Main';

export const MainDecorator = () => {
  const {Header, Footer, Content} = Layout;

  return (
    <Layout style={{height: '100vh'}}>
      <Header style={{background: '#1890ff'}}>Header</Header>
      <Content style={{display: 'grid', placeItems: 'center'}}>
        <BrowserRouter>
            <div>
              <Switch>
                <Route path="/" component={localStorage.getItem('token') ? Main : Login} />
                <Route path="/main" component={localStorage.getItem('token') ? Main : Login} />
              </Switch>
            </div>
        </BrowserRouter>
      </Content>
      <Footer style={{textAlign: 'center'}}>Footer</Footer>
    </Layout>
  );
};