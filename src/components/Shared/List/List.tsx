import { FC } from 'react';
import styled from 'styled-components';

const WrapperList = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 10px 0;
  font-size: 2rem;
  width: 100%;
  p {
    font-size: 1.6rem;
  }

  &:nth-child(odd) {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0) 0%,
      rgba(128, 128, 131, 0.476) 13%,
      rgba(87, 87, 92, 0.412) 36%,
      rgba(163, 163, 163, 0.388) 63%,
      rgba(130, 134, 135, 0.296) 84%,
      rgba(0, 212, 255, 0) 100%
    );
  }
`;

interface ListProps {
  items?: {
    id: string | number;
    element: React.ReactNode | string;
  }[];
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <WrapperList>
      {items && items.map(item => <ListItem key={item.id}>{item.element}</ListItem>)}
    </WrapperList>
  );
};

export default List;
