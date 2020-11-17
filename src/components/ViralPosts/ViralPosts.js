import React, {useEffect, Fragment, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as A from '@modules/images/images.actions';
import styled from 'styled-components';
import {Post} from '@components/Post';
import {Button} from 'antd';

export const ViralPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.images).viralPosts;
  const favorite = useSelector(state => state.images).favoriteImages;
  const viralPostsLoading = useSelector(state => state.images).viralPostsLoading;
  const [page, setPage] = useState(1);
  const filter = posts
    .filter(el => el.images !== undefined)
    .filter(el => el.images.every(el => el.type !== 'video/mp4'));

  useEffect(() => {
    dispatch(A.getViralPosts.request(page));
    dispatch(A.getFavoriteImages.request());
  }, [dispatch, page]);

  return (
    <Fragment>
      <ImagesWrapper>
        {filter.map(el => {
          return <Post favorite={favorite.map(el => el.id)} key={el.id} post={el} />;
        })}
      </ImagesWrapper>
      {!viralPostsLoading && (
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
      )}
    </Fragment>
  )
};

const ImagesWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
