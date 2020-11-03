import React, {Fragment, useState} from 'react';
import {Card, Modal, Typography, Image, Button} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import styled from 'styled-components';
import * as A from '../../modules/images/images.actions';
import {useDispatch} from 'react-redux';
import {HeartOutlined} from '@ant-design/icons';
const {Paragraph, Title, Text} = Typography;

export const PostComponent = props => {
  const {post, favorite} = props;
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Card title={post.title} style={{width: 320, margin: 'auto'}}>
        <LazyLoadImage
          width={270}
          height={270}
          effect="blur"
          src={post.images[0].link ? post.images[0].link : post.link}
          onClick={() => setIsVisible(true)}
        />
        <Paragraph ellipsis>{post.description}</Paragraph>
      </Card>
      <Modal
        title={<TitleWrapper>{post.title}</TitleWrapper>}
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        okButtonProps={{style: {display: 'none'}}}
        cancelButtonProps={{style: {display: 'none'}}}
      >
        {post.images.map(el => {
          return (
            <Card key={el} title={el.title} style={{background: '#f0f2f5', borderRadius: '10px', margin: '5px'}}>
              <Image key={el.id} src={el.link} />
              <Paragraph ellipsis>{el.description}</Paragraph>
              {!favorite.includes(el.id) ? (
                <Button type="primary" onClick={() => dispatch(A.favoriteImage.request(el.id))}>
                  Add to favorite
                </Button>
              ) : null}
            </Card>
          );
        })}
        <TextWrapper>{post.description}</TextWrapper>
      </Modal>
    </>
  );
};

const TitleWrapper = styled(Title)`
  text-align: center;
`;

const TextWrapper = styled(Text)`
  font-size: 18px;
  text-align: center;
`;
