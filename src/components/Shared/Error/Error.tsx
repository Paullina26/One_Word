import { useLottie } from 'lottie-react';

import error from './error.json';

export const Error = () => {
  const options = {
    animationData: error,
    loop: false,
  };
  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Error;
