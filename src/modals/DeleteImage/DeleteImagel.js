import React, {Fragment, useState} from 'react'
import {Button, Modal, Tooltip} from 'antd';
import {
  ExclamationCircleOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import {DeleteOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import * as A from '@modules/images/images.actions';

export const DeleteImagel = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()
  const {id} = props

  return (
        <Fragment>
          <Tooltip title="Delete image">
          <DeleteButtonWrapper type="primary" onClick={() => setIsVisible(true)}>
            <DeleteOutlined />
          </DeleteButtonWrapper>
          </Tooltip>
          <Modal
            title="Basic Modal"
            visible={isVisible}
            onOk={() => {
              dispatch(A.deleteImage.request(id))
              setIsVisible(false)
            }}
            onCancel={() => setIsVisible(false)}
          >
           <p><ExclamationCircleOutlined style={{margin: "10px"}} />Are you sure you want to delete image?</p>
          </Modal>
        </Fragment>
  )
}

const DeleteButtonWrapper = styled(Button)`
  background: #f5222d;
  border-color: #f5222d;
 
  &:hover{ 
    background: #f5222d;
    border-color: #f5222d;
  }
`;