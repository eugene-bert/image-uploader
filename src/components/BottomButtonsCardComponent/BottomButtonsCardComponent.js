import React from 'react'
import {Button, Modal, Tooltip} from 'antd';
import * as A from '../../modules/images/images.actions'
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import {DeleteImageModal} from '../../modals/DeleteImageModal/DeleteImageModal';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

export const BottomButtonsCardComponent  = (props) => {
  const {favorite, id, deletable } = props
  const dispatch = useDispatch()

  return (
    <BottomButtonsWrapper>
      <Tooltip title="Add to favorite">
        {!favorite.includes(id) ? (
          <Button type="primary" onClick={() => dispatch(A.favoriteImage.request(id))}>
            <HeartOutlined />
          </Button>
        ) : (
          // <Button type="primary">
          //   <HeartFilled />
          // </Button>
          null
        )}
      </Tooltip>
      {deletable ? <DeleteImageModal id={id} /> : null}
    </BottomButtonsWrapper>
  )
}

const BottomButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;