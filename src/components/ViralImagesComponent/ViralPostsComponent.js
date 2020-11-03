import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '../../modules/images/images.actions';
import {ClipLoader} from 'react-spinners';
import styled from 'styled-components';
import {ImagesCardComponent} from '../ImagesCardComponent/ImagesCardComponent';
import {PostComponent} from '../PostComponent/PostComponent';

export const ViralPostsComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.images).viralPosts;
  const favorite = useSelector(state => state.images).favoriteImages;
  const filter = posts
    .filter(el => el.images !== undefined)
    .filter(el => el.images.every(el => el.type !== 'video/mp4'));

  useEffect(() => {
    dispatch(A.getViralPosts.request(1))
    dispatch(A.getFavoriteImages.request())
  }, [dispatch]);

  return posts.length ? (
    <ImagesWrapper>{filter.map(el => {
      return <PostComponent favorite={favorite.map(el => el.id)} key={el.id} post={el}/>
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
