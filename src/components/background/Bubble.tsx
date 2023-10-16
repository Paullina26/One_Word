import { FC } from 'react';
import styled from 'styled-components';
import { fly } from 'components/Background/animation';

interface BubbleProps {
  flag_url: string;
  top: string;
  left: string;
  height: string;
  width: string;
  directions: string;
  z_index?: number;
  fly_params?: { x: number; y: number; time: number };
}

const BubbleStyled = styled.div<BubbleProps>`
  background-image: url(${({ flag_url }) => flag_url});
  background-size: cover;
  background-position: center;

  border-radius: 50%;
  position: fixed;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-shadow: 0 1rem 1.25rem 0 rgba(95, 98, 107, 0.247), 0 -0.25rem 1.5rem #3333334a inset,
    0 0.75rem 0.5rem rgba(255, 255, 255, 0.37) inset, 0 0.25rem 0.5rem 0 #e2e2e253 inset;
  z-index: ${({ z_index }) => z_index};
  animation: ${({ fly_params }) => fly(fly_params?.x, fly_params?.y)}
    ${({ fly_params }) => fly_params?.time || 0}s linear infinite;
`;

const Bubble: FC<BubbleProps> = ({
  flag_url,
  top,
  left,
  height,
  width,
  directions,
  z_index,
  fly_params,
}) => {
  return (
    <BubbleStyled
      directions={directions}
      flag_url={flag_url}
      top={top}
      left={left}
      height={height}
      width={width}
      z_index={z_index}
      fly_params={fly_params}
    />
  );
};

export default Bubble;
