import React, {Fragment, useEffect, useState} from 'react';
import {Comment, List, Tooltip} from 'antd';
import moment from 'moment';

export const PostSubComment = props => {
  const {children} = props;
  return (
    <Fragment>
      <List
        className="comment-list"
        header={`${children.length} replies`}
        itemLayout="horizontal"
        dataSource={children}
        renderItem={children => (
          <li>
            <Comment
              author={children.author}
              content={<p>{children.comment}</p>}
              // actions={[<span>Reply to</span>]}
              datetime={
                <Tooltip title={moment.unix(children.datetime).format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment.unix(children.datetime).fromNow()}</span>
                </Tooltip>
              }
            >
              {children.children.length >= 1 ? <PostSubComment key={children.id} children={children.children} /> : null}
            </Comment>
          </li>
        )}
      />
    </Fragment>
  );
};
