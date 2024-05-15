import { FC } from 'react';

import { Message as MessageProps } from '../types';
import * as S from '../StyleChat';

const Message: FC<MessageProps> = ({ role, content }) => {
  return <S.MessageWrapper $role={role}>{content}</S.MessageWrapper>;
};

export default Message;
