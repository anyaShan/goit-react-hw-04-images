import { RotatingLines } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.6"
        width="100"
        visible={true}
      />
    </LoaderWrap>
  );
};
