import React from 'react';
import { LoaderWrapper, LoaderBackground, Spinner } from './styled';

/* eslint-disable react/prefer-stateless-function */
const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderBackground />
      <Spinner>
        <div className="loader">Loading...</div>
      </Spinner>
    </LoaderWrapper>
  );
};

export default Loader;
