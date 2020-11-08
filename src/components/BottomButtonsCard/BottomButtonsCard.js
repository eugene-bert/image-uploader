import React from 'react'
import {Button, Tooltip} from 'antd';
import * as A from '@modules/images/images.actions'
import {HeartOutlined} from '@ant-design/icons';
import {DeleteImage} from '@modals/DeleteImage';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

export const BottomButtonsCard  = (props) => {
  const {favorite, id, deletable } = props
  const dispatch = useDispatch()

  return (
    <BottomButtonsWrapper>
      <Tooltip title="Add to favorite">
        {!favorite.includes(id) ? (
          <Button type="primary" onClick={() => dispatch(A.favoriteImage.request(id))}>
            <HeartOutlined />
          </Button>
        ) : null}
      </Tooltip>
      {deletable ? <DeleteImage id={id} /> : null}
    </BottomButtonsWrapper>
  )
}

const BottomButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;