import {Modal, Button} from 'antd';
import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";



export const LoginModal = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  let history = useHistory();

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
      history.push("/");
    }
  }, [])

  return (
    <>
      <Modal closable={false} footer={null} title="Authorization needed to continue" style={{textAlign: "center"}} visible={isVisible}>
        <p>Application is using IMGUR API please login here</p>
        <a href="https://api.imgur.com/oauth2/authorize?client_id=3d138a7adc8c5d8&response_type=token&state=test">Allow access to IMGUR account</a>
      </Modal>
    </>
  );
};