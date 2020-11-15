import React, {useState} from 'react'
import {Tooltip, Comment} from 'antd';
import moment from 'moment';
import {PostSubComment} from '@components/PostSubComment';
import {AddComment} from '@components/AddComment';

export const CommentComponent = (props) => {
  const [showInput, setShowInput] = useState(false)
  const {comment, postId} = props
  return (
    <li>
      <Comment
        key={comment.id}
        author={comment.author}
        content={<p>{comment.comment}</p>}
        actions={[<span key="comment-nested-reply-to" onClick={() => setShowInput(!showInput)}>Reply to</span>]}
        datetime={
          <Tooltip title={moment.unix(comment.datetime).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment.unix(comment.datetime).fromNow()}</span>
          </Tooltip>
        }
      >
        {showInput && <AddComment commentId={comment.id} postId={postId} open={showInput}/>}
        {comment.children.length >= 1 ? (<PostSubComment postId={postId} children={comment.children} />) : null}
      </Comment>
    </li>
  )
}