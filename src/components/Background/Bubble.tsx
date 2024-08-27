import { FC } from 'react';
import styled from 'styled-components';
import { fly } from '@components/Background/animation';

interface BubbleProps {
  $flagUrl: string;
  $top: string;
  $left: string;
  $height: string;
  $width: string;
  $directions: string;
  $zIndex?: number;
  $flyParams?: { x: number; y: number; time: number };
  $borderRadius?: string;
}

const BubbleStyled = styled.div<BubbleProps>`
  background-image: url(${({ $flagUrl }) => $flagUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({ $borderRadius }) => $borderRadius || '50%'};
  position: fixed;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.2), 5px 5px 20px rgba(158, 158, 158, 0.4),
    10px 10px 30px rgba(0, 0, 0, 0.5), inset 0px 0px 20px 5px rgba(158, 158, 158, 0.1),
    inset -5px -5px 15px rgba(0, 0, 0, 0.8);
  z-index: ${({ $zIndex }) => $zIndex};
  animation: ${({ $flyParams }) => fly($flyParams?.x, $flyParams?.y)}
    ${({ $flyParams }) => $flyParams?.time || 0}s linear infinite;
`;

const Bubble: FC<BubbleProps> = ({
  $flagUrl,
  $top,
  $left,
  $height,
  $width,
  $directions,
  $zIndex,
  $flyParams,
  $borderRadius,
}) => {
  return (
    <BubbleStyled
      $directions={$directions}
      $flagUrl={$flagUrl}
      $top={$top}
      $left={$left}
      $height={$height}
      $width={$width}
      $zIndex={$zIndex}
      $flyParams={$flyParams}
      $borderRadius={$borderRadius}
    />
  );
};

export default Bubble;
