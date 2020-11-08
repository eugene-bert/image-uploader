import {Form, Button, Input} from 'antd';
import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import * as A from '@modules/comments/comments.actions';
const {TextArea} = Input;

export const AddComment = props => {
  const {postId, commentId} = props;
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const addComment = () => {
    const formData = new FormData();
    formData.append('image_id', postId);
    formData.append('comment', comment);
    if (commentId) {
      formData.append('parent_id', commentId)
      dispatch(A.addComment.request({data: formData, id: postId}));
    } else {
      dispatch(A.addComment.request({data: formData, id: postId}));
    }
  };

  return (
    <AddCommentWrapper>
      <Form.Item>
        <TextArea rows={4} placeholder="Input comment here" onChange={event => setComment(event.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" onClick={() => addComment()}>
          Add Comment
        </Button>
      </Form.Item>
    </AddCommentWrapper>
  );
};

const AddCommentWrapper = styled.div`
  margin: 20px;
`;