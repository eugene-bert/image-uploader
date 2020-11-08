import React, {useEffect, Fragment, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '@modules/images/images.actions';
import {ClipLoader} from 'react-spinners';
import styled from 'styled-components';
import {Post} from '@components/Post';
import {Button} from 'antd';

export const ViralPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.images).viralPosts;
  const isLoading = useSelector(state => state.images).loading;
  const favorite = useSelector(state => state.images).favoriteImages;
  const [page, setPage] = useState(1);
  const filter = posts
    .filter(el => el.images !== undefined)
    .filter(el => el.images.every(el => el.type !== 'video/mp4'));

  useEffect(() => {
    dispatch(A.getViralPosts.request(page));
    dispatch(A.getFavoriteImages.request());
  }, [dispatch, page]);

  return !isLoading ? (
    <Fragment>
      <ImagesWrapper>
        {filter.map(el => {
          return <Post favorite={favorite.map(el => el.id)} key={el.id} post={el} />;
        })}
      </ImagesWrapper>
      <LoadMoreWrapper>
        <Button
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
        >
          Load more
        </Button>
      </LoadMoreWrapper>
    </Fragment>
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

const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
