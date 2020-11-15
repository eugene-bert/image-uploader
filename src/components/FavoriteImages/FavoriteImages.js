import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '@modules/images/images.actions';
import styled from 'styled-components';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {ImagesCard} from '@components/ImagesCard';

export const FavoriteImages = () => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images).favoriteImages;

  useEffect(() => {
   dispatch(A.getFavoriteImages.request())
  }, [dispatch]);

  return (
    <ImagesWrapper>
      {images.map(el => {
        return <ImagesCard favorite={images.map(el => el.id)} key={el.id} image={el} post={el} />;
      })}
    </ImagesWrapper>
  )
};

const ImagesWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
