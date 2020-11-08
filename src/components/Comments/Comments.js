import React, {Fragment, useEffect} from 'react'
import { List } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '@modules/comments/comments.actions';
import {CommentComponent} from '@components/CommentComponent';

export const Comments = (props) => {
  const {postId, post} = props;
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments).comments;

  useEffect(() => {
    dispatch(A.getComments.request(postId))
  }, [dispatch]);

  return (
    <Fragment>
      <List
        className="comment-list"
        header={`${comments.length} replies`}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={comments => <CommentComponent postId={postId} comment={comments} /> }
      />
    </Fragment>
  )
}