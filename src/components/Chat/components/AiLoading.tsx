import { useLottie } from 'lottie-react';

import loading from './loading.json';
import * as S from '../StyleChat';

const AiLoading = () => {
  const options = {
    animationData: loading,
    loop: true,
  };

  const { View } = useLottie(options);

  return <S.LoadingWrapper>{View}</S.LoadingWrapper>;
};

export default AiLoading;
