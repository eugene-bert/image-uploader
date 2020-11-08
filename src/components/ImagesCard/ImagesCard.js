import React, {useState} from 'react';
import {Card, Modal, Typography, Image} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import styled from 'styled-components';
import * as A from '@modules/images/images.actions';
import {useDispatch} from 'react-redux';
import {BottomButtonsCard} from '@components/BottomButtonsCard';
const {Paragraph, Title, Text} = Typography;

export const ImagesCard = props => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const {image, favorite, deletable} = props;
  const [title, setTitle] = useState(image.title || 'Input title here');
  const [description, setDescription] = useState(image.description || 'Input description here');

  return (
    <>
      <CardWrapper title={image.title} style={{width: 320, margin: 'auto'}}>
        <LazyLoadImage
          width={270}
          height={270}
          effect="blur"
          delayTime={100}
          src={image.link}
          onClick={() => setIsVisible(true)}
        />
        <Paragraph ellipsis style={{padding: '10px 10px 0 10px'}}>
          {image.description}
        </Paragraph>
        <BottomButtonsCard deletable={props.deletable} id={image.id} favorite={favorite} />
      </CardWrapper>
      <Modal
        title={
          <TitleWrapper editable={props.editable ? {onChange: e => setTitle(e)} : false}>
            {props.editable ? title : null}
          </TitleWrapper>
        }
        visible={isVisible}
        okButtonProps={!props.editable ? {style: {display: 'none'}} : null}
        cancelButtonProps={!props.editable ? {style: {display: 'none'}} : null}
        onOk={() => {
          const formData = new FormData();
          formData.append('title', title);
          formData.append('description', description);
          dispatch(A.updateImageInfo.request({image: image.id, data: formData}));
          setIsVisible(false);
        }}
        onCancel={() => setIsVisible(false)}
      >
        <Image src={image.link} />
        <TextWrapper>
          <Text editable={props.editable ? {onChange: e => setDescription(e)} : false}>
            {props.editable ? description : null}
          </Text>
        </TextWrapper>
        <BottomButtonsCard deletable={props.deletable} id={image.id} favorite={favorite} />
      </Modal>
    </>
  );
};

const CardWrapper = styled(Card)`
  margin: auto;
  transition: background-color 0.5s;
  border-radius: 10px;
  &:hover {
    background-color: #bae7ff;
    transition: background-color 0.5s;
  }
`;

const TitleWrapper = styled(Title)`
  text-align: center;
`;

const TextWrapper = styled.div`
  margin: 10px;
  font-size: 18px;
`;
