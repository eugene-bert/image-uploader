import React, { useState} from 'react';
import {Card, Modal, Typography, Image} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import styled from 'styled-components';
import * as A from '@modules/images/images.actions';
import {useDispatch} from 'react-redux';
import {BottomButtonsCardComponent} from '@components/BottomButtonsCardComponent';
const {Paragraph, Title, Text} = Typography;

export const ImagesCardComponent = props => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const {image, favorite} = props;
  const [title, setTitle] = useState(image.title || 'Input title here');
  const [description, setDescription] = useState(image.description || 'Input description here');

  return (
    <>
      <CardWrapper title={image.title} style={{width: 320, margin: 'auto'}}>
        <LazyLoadImage width={270} height={270} effect="blur" src={image.link} onClick={() => setIsVisible(true)} />
        <Paragraph ellipsis>{image.description}</Paragraph>
        <BottomButtonsCardComponent deletable={props.deletable} id={image.id} favorite={favorite}/>
      </CardWrapper>
      <Modal
        title={<TitleWrapper editable={props.editable ? {onChange: e => setTitle(e)} : false}>{title}</TitleWrapper>}
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
        <TextWrapper editable={props.editable ? {onChange: e => setDescription(e)} : false}>{description}</TextWrapper>
        <BottomButtonsCardComponent deletable={props.deletable} id={image.id} favorite={favorite}/>
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
