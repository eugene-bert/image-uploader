import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as A from './images.actions';
import {ClipLoader} from 'react-spinners';
import styled from 'styled-components';
import {Card, Typography} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const { Paragraph } = Typography;

export const MyImagesComponent = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images).images;

  useEffect(() => {
    setTimeout(() => dispatch(A.getImagesData.request()), 0);
  }, [dispatch]);

  return images.length > 0 ? (
    <ImagesWrapper>
      {images.map(el => {
        return (
          <Fragment key={el.id}>
            <Card title={el.title} style={{width: 300, margin: 'auto'}}>
              <LazyLoadImage width={250} height={250} effect="blur" src={el.link} />
              <Paragraph ellipsis>{el.description}</Paragraph>
            </Card>
          </Fragment>
        );
      })}
    </ImagesWrapper>
  ) : (
    <LoaderWrapper>
      <ClipLoader size={150} color={'#1890ff'} />
    </LoaderWrapper>
  );
};

const ImagesWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const LoaderWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
`;
