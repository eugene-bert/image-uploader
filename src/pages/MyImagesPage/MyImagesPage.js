import React, {Fragment} from 'react';
import {MyImages} from '@components/MyImages/MyImages';
import {UploadImage} from '@modals/UploadImage/UploadImage';

export const MyImagesPage = () => {
  return (
    <Fragment>
      <UploadImage />
      <MyImages />
    </Fragment>
  );
};
