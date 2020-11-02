import React, {Fragment} from 'react';
import {MyImagesComponent} from '../../components/images/MyImagesComponent';
import {UploadImageModal} from '../../modals/UploadImageModal/UploadImageModal';

export const MyImages = () => {
  return (
    <Fragment>
      <UploadImageModal />
      <MyImagesComponent />
    </Fragment>
  );
};
