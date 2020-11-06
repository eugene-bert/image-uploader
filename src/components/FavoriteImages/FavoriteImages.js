import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '@modules/images/images.actions';
import {ClipLoader} from 'react-spinners';
import styled from 'styled-components';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {ImagesCard} from '@components/ImagesCard';

export const FavoriteImages = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images).favoriteImages;

  useEffect(() => {
   dispatch(A.getFavoriteImages.request())
  }, [dispatch]);

  return images.length > 0 ? (
    <ImagesWrapper>
      {images.map(el => {
        return <ImagesCard favorite={images.map(el => el.id)} key={el.id} image={el} post={el} />;
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
