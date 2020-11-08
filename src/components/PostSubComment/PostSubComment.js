import React, {Fragment} from 'react';
import {List} from 'antd';
import {CommentComponent} from '@components/CommentComponent/CommentComponent';

export const PostSubComment = props => {
  const {children, postId} = props;
  return (
    <Fragment>
      <List
        className="comment-list"
        header={`${children.length} replies`}
        itemLayout="horizontal"
        dataSource={children}
        renderItem={children => (
          <CommentComponent postId={postId} comment={children} />
        )}
      />
    </Fragment>
  );
};
