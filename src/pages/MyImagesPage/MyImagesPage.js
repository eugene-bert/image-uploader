import React, {Fragment} from 'react';
import {MyImages} from '@components/MyImages';
import {UploadImage} from '@modals/UploadImage';

export const MyImagesPage = () => {
  return (
    <Fragment>
      <UploadImage />
      <MyImages />
    </Fragment>
  );
};
