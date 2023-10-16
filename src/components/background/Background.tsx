import { FC } from 'react';
import styled from 'styled-components';
import Bubble from 'components/Background/Bubble';
import { flags } from 'helpers/flags';

const BgStyled = styled.div`
  /* z-index: -1; */
  /* height: 100vh; */
  /* width: 100vw; */
  /* background-attachment: fixed;
  background-image: radial-gradient(
    circle,
    #a2a0c8,
    #a7a5cc,
    #acabcf,
    #b1b0d3,
    #b6b6d6,
    #bcbcd9,
    #c1c1dc,
    #c7c7df,
    #cecfe3,
    #d6d7e7,
    #dddeeb,
    #e5e6ef
  ); */
`;

const bubbles = [
  {
    directions: 'to right top',
    flag_url: flags.FlagDeu,
    top: '72vh',
    left: '50vw',
    height: '60px',
    width: '60px',
    fly_params: { x: 0.3, y: 1, time: 75 },
  },
  {
    directions: 'to right top',
    flag_url: flags.FlagPl,
    top: '75vh',
    left: '20vw',
    height: '55px',
    width: '55px',
    fly_params: { x: 0.3, y: 1, time: 85 },
  },
  {
    directions: 'to right top',
    flag_url: flags.FlagGbr,
    top: '65vh',
    left: '70vw',
    height: '45px',
    width: '45px',
    fly_params: { x: 0.3, y: 1, time: 75 },
  },
  {
    directions: 'to right bottom',
    flag_url: flags.FlagGbr,
    top: '15vh',
    left: '5vw',
    height: '70px',
    width: '70px',
    z_index: -10,
    fly_params: { x: 0.3, y: -1, time: 95 },
  },
  {
    directions: 'to right top',
    flag_url: flags.FlagGbr,
    top: '25vh',
    left: '30vw',
    height: '75px',
    width: '75px',
    z_index: -10,
    fly_params: { x: -0.3, y: 1.3, time: 75 },
  },
  {
    directions: 'to right bottom',
    flag_url: flags.FlagPl,
    top: '20vh',
    left: '58vw',
    height: '55px',
    width: '55px',
    z_index: -10,
    fly_params: { x: 0.8, y: -1.4, time: 80 },
  },
  {
    directions: 'to left top',
    flag_url: flags.FlagFr,
    top: '20vh',
    left: '45vw',
    height: '30px',
    width: '30px',
    z_index: -10,
    fly_params: { x: -0.8, y: -1, time: 60 },
  },
  {
    directions: 'to right bottom',
    flag_url: flags.FlagFr,
    top: '50vh',
    left: '70vw',
    height: '90px',
    width: '90px',
    z_index: -10,
    fly_params: { x: -0.8, y: -1, time: 60 },
  },

  {
    directions: 'to right top',
    flag_url: flags.FlagGbr,
    top: '65vh',
    left: '22vw',
    height: '70px',
    width: '70px',
    z_index: 0,
    fly_params: { x: -0.8, y: -0.45, time: 60 },
  },
  {
    directions: 'circle',
    flag_url: flags.FlagDeu,
    top: '25vh',
    left: '80vw',
    height: '70px',
    width: '70px',
    z_index: 0,
  },
];

const Background: FC = () => {
  return (
    <BgStyled>
      {bubbles.map((el, index) => (
        <Bubble key={`${el.directions}-${index}`} {...el} />
      ))}
    </BgStyled>
  );
};

export default Background;
