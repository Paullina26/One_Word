import { useLottie } from 'lottie-react';

import loading from './loading.json';

const Loading = () => {
  const options = {
    animationData: loading,
    loop: true,
  };

  const { View } = useLottie(options);
  return <>{View}</>;
};

export default Loading;
