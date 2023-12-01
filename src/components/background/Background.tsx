import { FC } from 'react';
import styled from 'styled-components';
import Bubble from 'components/Background/Bubble';
import { flags } from 'helpers/flags';

const BgStyled = styled.div`
  //test
`;

const bubbles = [
  {
    $directions: 'to right top',
    $flagUrl: flags.FlagDeu,
    $top: '72vh',
    $left: '50vw',
    $height: '60px',
    $width: '60px',
    $zIndex: -10,
    $flyParams: { x: 0.3, y: 1, time: 75 },
    // $borderRadius: '45% 65% 45% 65% / 45% 65% 45% 65%',
  },
  {
    $directions: 'to right top',
    $flagUrl: flags.FlagPl,
    $top: '75vh',
    $left: '20vw',
    $height: '55px',
    $width: '55px',
    $zIndex: -10,
    $flyParams: { x: 0.3, y: 1, time: 85 },
    // $borderRadius: '43% 57% 41% 59% / 61% 63% 37% 39%',
  },
  {
    $directions: 'to right top',
    $flagUrl: flags.FlagGbr,
    $top: '65vh',
    $left: '70vw',
    $height: '45px',
    $width: '45px',
    $zIndex: -10,
    $flyParams: { x: 0.3, y: 1, time: 75 },
    // $borderRadius: '53% 47% 51% 49% / 58% 46% 54% 42%',
  },
  {
    $directions: 'to right bottom',
    $flagUrl: flags.FlagGbr,
    $top: '15vh',
    $left: '5vw',
    $height: '70px',
    $width: '70px',
    $zIndex: -10,
    $flyParams: { x: 0.3, y: -1, time: 95 },
    // $borderRadius: '37% 63% 65% 35% / 52% 43% 57% 48% ',
  },
  {
    $directions: 'to right top',
    $flagUrl: flags.FlagGbr,
    $top: '25vh',
    $left: '30vw',
    $height: '75px',
    $width: '75px',
    $zIndex: -10,
    $flyParams: { x: -0.3, y: 1.3, time: 75 },
    // $borderRadius: '37% 63% 43% 57% / 59% 38% 62% 41% ',
  },
  {
    $directions: 'to right bottom',
    $flagUrl: flags.FlagPl,
    $top: '20vh',
    $left: '58vw',
    $height: '55px',
    $width: '55px',
    $zIndex: -10,
    $flyParams: { x: 0.8, y: -1.4, time: 80 },
    // $borderRadius: '53% 47% 51% 49% / 58% 46% 54% 42%',
  },
  {
    $directions: 'to left top',
    $flagUrl: flags.FlagFr,
    $top: '20vh',
    $left: '45vw',
    $height: '47px',
    $width: '47px',
    $zIndex: -10,
    $flyParams: { x: -0.8, y: -1, time: 60 },
    // $borderRadius: '52% 48% 47% 53% / 37% 36% 64% 63% ',
  },
  {
    $directions: 'to right bottom',
    $flagUrl: flags.FlagFr,
    $top: '50vh',
    $left: '70vw',
    $height: '90px',
    $width: '90px',
    $zIndex: -10,
    $flyParams: { x: -0.8, y: -1, time: 60 },
    // $borderRadius: '53% 47% 51% 49% / 58% 46% 54% 42%',
  },

  {
    $directions: 'to right top',
    $flagUrl: flags.FlagGbr,
    $top: '65vh',
    $left: '22vw',
    $height: '70px',
    $width: '70px',
    $zIndex: -10,
    $flyParams: { x: -0.8, y: -0.45, time: 60 },
    // $borderRadius: '59% 41% 56% 44% / 52% 59% 41% 48% ',
  },
  {
    $directions: 'circle',
    $flagUrl: flags.FlagDeu,
    $top: '25vh',
    $left: '80vw',
    $height: '70px',
    $width: '70px',
    $zIndex: -10,
    // $borderRadius: '58% 42% 51% 49% / 47% 49% 51% 53% ',
  },
];

const Background: FC = () => {
  return (
    <BgStyled>
      {bubbles.map((el, index) => (
        <Bubble key={`${el.$directions}-${index}`} {...el} />
      ))}
    </BgStyled>
  );
};

export default Background;
