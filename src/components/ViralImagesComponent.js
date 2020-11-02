import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '../modules/images/images.actions';
import {ClipLoader} from 'react-spinners';
import styled from 'styled-components';
import {ImagesCardComponent} from './ImagesCardComponent';

export const ViralImagesComponent = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images).viralImages;

  useEffect(() => {
    setTimeout(() => dispatch(A.getViralImages.request()), 0);
  }, [dispatch]);

  return images.length ? (
    <ImagesWrapper>
      {images.map(el => {
            return <ImagesCardComponent key={el.id} image={el} post={el}/>
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
