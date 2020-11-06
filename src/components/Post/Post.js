import React, {useState} from 'react';
import {Card, Modal, Typography, Image, Collapse} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {Comments} from '@components/Comments';
import {AddComment} from '@components/AddComment';
import {BottomButtonsCard} from '@components/BottomButtonsCard';
const {Paragraph, Title, Text} = Typography;
const { Panel } = Collapse;

export const Post = props => {
  const {post, favorite} = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <CardWrapper title={post.title} style={{width: 320}}>
        <LazyLoadImage
          width={270}
          height={270}
          effect="blur"
          src={post.images[0].link ? post.images[0].link : post.link}
          onClick={() => setIsVisible(true)}
        />
        <Paragraph ellipsis>{post.description}</Paragraph>
      </CardWrapper>
      <Modal
        title={<TitleWrapper>{post.title}</TitleWrapper>}
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        okButtonProps={{style: {display: 'none'}}}
        cancelButtonProps={{style: {display: 'none'}}}
      >
        {post.images.map(el => {
          return (
            <Card key={el.id} title={el.title} style={{background: '#f0f2f5', borderRadius: '10px', margin: '5px'}}>
              <Image key={el.id} src={el.link} />
              <Paragraph>{el.description}</Paragraph>
              <BottomButtonsCard id={el.id} favorite={favorite}/>
            </Card>
          );
        })}
        <TextWrapper>{post.description}</TextWrapper>
        <Collapse ghost>
          <Panel header="Show comments">
            <AddComment id={post.id}/>
            <Comments comment={post.id}/>
          </Panel>
        </Collapse>
      </Modal>
    </>
  );
};

const CardWrapper = styled(Card)`
    margin: auto;
    transition: background-color .5s;
    border-radius: 10px;
    &:hover {
     background-color:#bae7ff;
     transition: background-color .5s;
    }
`

const TitleWrapper = styled(Title)`
  text-align: center;
`;

const TextWrapper = styled(Text)`
  font-size: 18px;
  text-align: center;
`;