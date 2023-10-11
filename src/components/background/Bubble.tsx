import { FC } from 'react';
import styled from 'styled-components';
import { fly } from '../../style/animation';

interface BubbleProps {
  flagUrl?: string;
  top?: string;
  left?: string;
  height?: string;
  width?: string;
  directions?: string;
  zIndex?: number;
  flyParams?: { x: number; y: number; time: number };
}

const BubbleStyled = styled.div<BubbleProps>`
  background-image: url(${({ flagUrl }) => flagUrl});
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

  z-index: ${({ zIndex }) => zIndex};

  /* @ts-ignore */
  animation: ${({ flyParams }) => fly(flyParams?.x, flyParams?.y)}
    ${({ flyParams }) => flyParams?.time || 0}s linear infinite;
`;

const Bubble: FC<BubbleProps> = ({
  flagUrl,
  top,
  left,
  height,
  width,
  directions,
  zIndex,
  flyParams,
}) => {
  return (
    <BubbleStyled
      directions={directions}
      flagUrl={flagUrl}
      top={top}
      left={left}
      height={height}
      width={width}
      zIndex={zIndex}
      flyParams={flyParams}
    />
  );
};

export default Bubble;
