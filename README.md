<p align="center">
  <img alt="Image Uploader" src="https://image-uploader.bertsovich.com/b85e1de58aac2c746084a8601011202c.png" width="480">
</p>

## About
[Image Uploader](https://image-uploader.bertsovich.com/) - Frontend application connected to [Imgur API](https://apidocs.imgur.com/)

## What can Image Uploader do?
- Uploading an image 
- Favorite an image
- Viral posts review & commenting
- List of your images, favorite images, viral posts

##

- ⚛️ [React](https://reactjs.org/)
- 👾 [Redux](https://redux.js.org/) + [Redux-sage](https://redux-saga.js.org/) 
- 💅 [Ant Design](https://ant.design/) + [Styled-components](https://styled-components.com/)

## Getting started
[Imgur Api Docs](https://apidocs.imgur.com/)

Copy .env file and fill `REACT_APP_CLIENT_ID` with Imgur Client ID you recieved from registration.
> Make sure that application redirect configured to your website domain name or http://localhost:3000/ for development.
```
$ cp .env.sample .env
```   
## Install project dependencies
```
$ yarn install
```
## Develop the project
```
$ yarn dev
```
## Run production build
Build project: `yarn build`  
Start server: `yarn start`


