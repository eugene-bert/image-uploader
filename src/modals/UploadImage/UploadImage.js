import React, {Fragment, useState} from 'react';
import {Upload, Modal, Image, Form, Input} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import * as A from '@modules/images/images.actions';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
const {Dragger} = Upload;

export const UploadImage = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [visible, setIsVisible] = useState(false);
  const [inputs, setInputs] = useState({});

  const uploadProps = {
    showUploadList: false,
    beforeUpload: file => {
      setImagePreview(URL.createObjectURL(file));
      setImage(file);
      setIsVisible(true);
      return false;
    },
  };

  function uploadImage() {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', inputs.title);
    formData.append('description', inputs.description);
    dispatch(A.uploadImage.request(formData));
    setIsVisible(false);
  }

  return (
    <Fragment>
      <DraggerWrapper {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
      </DraggerWrapper>
      <Modal visible={visible} onCancel={() => setIsVisible(false)} onOk={() => uploadImage()}>
        <Image src={imagePreview} />
        <FormWrapper>
          <Form layout="horizontal">
            <Form.Item label="Title">
              <Input
                placeholder="Title"
                onChange={({target}) =>
                  setInputs(state => ({
                    ...state,
                    title: target.value,
                  }))
                }
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input
                placeholder="Description"
                onChange={({target}) =>
                  setInputs(state => ({
                    ...state,
                    description: target.value,
                  }))
                }
              />
            </Form.Item>
          </Form>
        </FormWrapper>
      </Modal>
    </Fragment>
  );
};

const DraggerWrapper = styled(Dragger)`
  height: auto !important;
  margin: 20px auto;
`;

const FormWrapper = styled.div`
  margin: 20px;
`;
