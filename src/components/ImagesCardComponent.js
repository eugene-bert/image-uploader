import React, {Fragment, useState} from 'react';
import {Card, Modal, Typography, Image} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import styled from 'styled-components';
const {Paragraph, Title, Text} = Typography;

export const ImagesCardComponent = props => {
  const [isVisible, setIsVisible] = useState(false)
  const {image} = props;
  return image.type  === 'image/jpeg' || image.type === 'image/png' ? (
    <>
      <Card title={image.title} style={{width: 320, margin: 'auto'}} onClick={() => setIsVisible(true)}>
        <LazyLoadImage width={270} height={270} effect="blur" src={image.link} />
        <Paragraph ellipsis>{image.description}</Paragraph>
      </Card>
      <Modal
        title={<TitleWrapper editable={props.editable}>{image.title}</TitleWrapper>}
        visible={isVisible}
        // onOk={this.handleOk}
        onCancel={() => setIsVisible(false)}
      >
        <Image src={image.link}/>
        <TextWrapper editable={props.editable}>{image.description}</TextWrapper>
      </Modal>
    </>
  ) : null
};


const TitleWrapper = styled(Title)`
    text-align: center;
`

const TextWrapper = styled(Text)`
    font-size: 18px;
    text-align: center;
`