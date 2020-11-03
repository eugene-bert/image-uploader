import {Modal} from 'antd';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

export const LoginModal = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  useEffect(() =>{
    let params = {}, queryString = location.hash.substring(1),
      regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    if (params.access_token) {
      console.log(params)
      localStorage.setItem('token', params.access_token)
      localStorage.setItem('refresh_token', params.refresh_token)
      localStorage.setItem('username', params.account_username)
      window.location.hash=''
      window.location.reload()
    }
  }, [])

  return (
    <>
      <ModalWrapper closable={false} footer={null} title="Authorization needed to continue" visible={isVisible}>
        <p>Application is using IMGUR API please login here: </p>
        <a href="https://api.imgur.com/oauth2/authorize?client_id=3d138a7adc8c5d8&response_type=token&state=test">Allow access to IMGUR account</a>
      </ModalWrapper>
    </>
  );
};

//styles
const ModalWrapper= styled(Modal)`
   text-align: center;
`;