import React, {Fragment, useState} from 'react';
import {Card, Modal, Typography, Image, Button, Tooltip} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import styled from 'styled-components';
import * as A from '../../modules/images/images.actions';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteImageModal} from '../../modals/DeleteImageModal/DeleteImageModal';
import {BottomButtonsCardComponent} from '../BottomButtonsCardComponent/BottomButtonsCardComponent';
const {Paragraph, Title, Text, Link} = Typography;

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
