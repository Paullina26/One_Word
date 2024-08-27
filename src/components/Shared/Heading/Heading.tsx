import { FC } from 'react';
import styled from 'styled-components';

import { font_settings } from '@style/mixins';

export const Wrapper = styled.div`
  ${font_settings(3, 'normal', 600)}
  margin: 5px auto;
  padding: 20px 0;
  color: ${({ theme }) => theme.purpleDark};
  font-weight: bold;
`;

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Heading;
