import React, {useEffect, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import * as A from './images.actions'
import {ClipLoader} from 'react-spinners';
import styled from 'styled-components';
import { Card, Typography} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component';
const { Paragraph } = Typography;


export const ViralImagesComponent = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images)

  useEffect(() => {
    setTimeout(() => dispatch(A.getViralImages.request()), 0)
  }, [dispatch]);

  return images.viralImages.length ? (
    <ImagesWrapper>
      {console.log(images.viralImages)}
      {images.viralImages.map((el) => {
        if (el.images) {
          if (el.images[0].type === "image/jpeg" || el.images[0].type === "image/png") {
            return (
              <Fragment key={el.id}>
                <Card title={el.images[0].title} style={{width: 300, margin: 'auto'}}>
                  <LazyLoadImage width={250} height={250} effect="blur" src={el.images[0].link} />
                  <Paragraph ellipsis>{el.images[0].description}</Paragraph>
                </Card>
              </Fragment>
            );
          }
        }
      })}
    </ImagesWrapper>
  ) : (
    <LoaderWrapper>
      <ClipLoader size={150} color={'#1890ff'} />
    </LoaderWrapper>
  );
}

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