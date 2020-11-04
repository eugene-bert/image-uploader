import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '@modules/images/images.actions';
import {ClipLoader} from 'react-spinners';
import styled from 'styled-components';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {ImagesCardComponent} from '@components/ImagesCardComponent';

export const MyImagesComponent = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images).images;
  const favorite = useSelector(state => state.images).favoriteImages;

  useEffect(() => {
    dispatch(A.getImagesData.request())
    dispatch(A.getFavoriteImages.request())
  }, [dispatch]);

  return images.length > 0 ? (
    <ImagesWrapper>
      {images.map(el => {
        return <ImagesCardComponent deletable favorite={favorite.map(el => el.id)} editable key={el.id} image={el} post={el}/>;
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
