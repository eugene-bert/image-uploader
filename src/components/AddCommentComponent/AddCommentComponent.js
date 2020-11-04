import { Form, Button, Input } from 'antd';
import React, {useState} from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import * as A from '@modules/comments/comments.actions';
const { TextArea } = Input;

export const AddCommentComponent = (props) => {
  const {id} = props
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')

  const addComment = () => {
    const formData = new FormData();
    {console.log(id)}
    {console.log(comment)}
    formData.append('image_id', id);
    formData.append('comment', comment);
    dispatch(A.addComment.request({data: formData, id: id}));
  }

  return (
    <AddComponentWrapper>
      <Form.Item>
        <TextArea rows={4} placeholder="Input comment here" onChange={(event) => setComment(event.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" onClick={() => addComment()}>
          Add Comment
        </Button>
      </Form.Item>
    </AddComponentWrapper>
  )
}

const AddComponentWrapper = styled.div`
  margin: 20px;
`;