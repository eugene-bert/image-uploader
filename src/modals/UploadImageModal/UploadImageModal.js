import React, {Fragment} from 'react';
import {Upload, message} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import * as A from '../../components/images/images.actions';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
const { Dragger } = Upload;

function checkSize(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export const UploadImageModal = () => {
  const dispatch = useDispatch();

  const uploadProps = {
    name: 'file',
    showUploadList: false,
    beforeUpload: file => {
      const fileSize = checkSize(file)
      if (fileSize) {
        return true
      }
      return false
    },
    action: file => {
        const formData = new FormData()
        formData.append('image', file)
        dispatch(A.uploadImage.request(formData))
    }
  };

  return (
    <Fragment>
        <DraggerWrapper {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </DraggerWrapper>
    </Fragment>
  );
};

const DraggerWrapper = styled(Dragger)`
    height: auto !important;
    margin-bottom: 20px;
`
