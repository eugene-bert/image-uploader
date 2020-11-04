import React, {Fragment, useEffect, useState} from 'react'
import { Comment, Tooltip, Form, Button, Input, List } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '../../modules/comments/comments.actions';
import {PostSubComment} from '../PostSubComment/PostSubComment';
import moment from 'moment';
import styled from 'styled-components';
const { TextArea } = Input;

export const CommentsComponent = (props) => {
  const {comment, post} = props;
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments).comments;
  const [replyIsOpen, setReplyIsOpen] = useState(false)

  useEffect(() => {
    dispatch(A.getComments.request(comment))
  }, [dispatch]);

  return (
    <Fragment>
      <List
        className="comment-list"
        header={`${comments.length} replies`}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={comments => (
          <li>
            <Comment
              key={comments.id}
              author={comments.author}
              content={<p>{comments.comment}</p>}
              // actions={[<span onClick={() => setReplyIsOpen(!replyIsOpen)}>Reply to</span>]}
              datetime={
                <Tooltip title={moment.unix(comments.datetime).format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment.unix(comments.datetime).fromNow()}</span>
                </Tooltip>
              }
            >
              {comments.children.length >= 1 ? (<PostSubComment children={comments.children} />) : null}
              {/*<ReplyInputWrapper reply={replyIsOpen}>*/}
              {/*  <Form.Item>*/}
              {/*    <TextArea rows={4} />*/}
              {/*  </Form.Item>*/}
              {/*  <Form.Item>*/}
              {/*    <Button htmlType="submit" type="primary">*/}
              {/*      Add Comment*/}
              {/*    </Button>*/}
              {/*  </Form.Item>*/}
              {/*</ReplyInputWrapper>*/}
              </Comment>
          </li>
        )}
      />
    </Fragment>
  )
}

// const ReplyInputWrapper = styled.div`
//    display: ${props => (props.reply ? 'block' : 'none')};
// `;