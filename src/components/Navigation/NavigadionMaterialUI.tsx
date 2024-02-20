import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import { routes } from 'data/routes';
import {
  boxShadow_button,
  color_gradient_button,
  color_gradient_animation,
  color_gradient_button_menu,
  color_gradient_menu_bar,
  color_gradient_light_menu,
  color_gradient_menu_burger,
  boxShadow_darkTheme_menu_element,
} from 'style/mixins';

const actions = [
  {
    icon: <SettingsIcon />,
    name: `${routes.SETTINGS_ADD_WORDS.name}`,
    to: `${routes.SETTINGS_ADD_WORDS.to}`,
  },
  {
    icon: <SettingsIcon />,
    name: `${routes.SETTINGS_LEARNING.name}`,
    to: `${routes.SETTINGS_LEARNING.to}`,
  },
  {
    icon: <SettingsIcon />,
    name: `${routes.SETTINGS_USER.name}`,
    to: `${routes.SETTINGS_USER.to}`,
  },
  { icon: <SchoolIcon />, name: `${routes.LEARN_HANGMAN.name}`, to: `${routes.LEARN_HANGMAN.to}` },
  {
    icon: <SchoolIcon />,
    name: `${routes.LEARN_FLASHCARD.name}`,
    to: `${routes.LEARN_FLASHCARD.to}`,
  },
  { icon: <SchoolIcon />, name: `${routes.LEARN_REPEAT.name}`, to: `${routes.LEARN_REPEAT.to}` },
  {
    icon: <SchoolIcon />,
    name: `${routes.LEARN_TRANSLATE.name}`,
    to: `${routes.LEARN_TRANSLATE.to}`,
  },
  {
    icon: <SchoolIcon />,
    name: `${routes.LEARN_TODAYS_WORD.name}`,
    to: `${routes.LEARN_TODAYS_WORD.to}`,
  },
];

const WrapperMenu = styled.div`
  .MuiSpeedDialAction-fab {
    width: 50px;
    height: 50px;
    ${color_gradient_menu_burger};
    ${boxShadow_darkTheme_menu_element};
    &:focus {
      outline: none;
    }
    &:hover {
      fill: blue;
    }
  }

  .MuiSvgIcon-root {
    font-size: 40px;
    color: #ffffff;
    &:hover {
      fill: #ffffff;
    }
  }

  .MuiSpeedDialAction-staticTooltipLabel {
    font-size: 20px;
    color: black;
    ${color_gradient_light_menu};
    ${boxShadow_darkTheme_menu_element};
    width: 200px;
    &:hover {
      ${color_gradient_animation}
    }
  }

  .MuiSpeedDialAction-staticTooltip {
    &:hover {
      .MuiSpeedDialAction-staticTooltipLabel {
        ${color_gradient_animation}
      }
    }
  }

  .MuiButtonBase-root {
    width: 70px;
    height: 70px;
    ${color_gradient_menu_burger};
    ${boxShadow_button};
  }
  .MuiSpeedDialIcon-root {
    height: 70px;
    width: 70px;
  }
  .MuiSpeedDialIcon-icon,
  .MuiSpeedDialIcon-root {
    width: 100%;
    height: 100%;
    color: #ffffff;
  }
`;

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleOpen = () => setOpen(!open);
  const navigate = useNavigate();

  return (
    <WrapperMenu>
      <Backdrop open={open} />
      <SpeedDial
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        ariaLabel='Add'
        // className={classes.SpeedDial}
        icon={<SpeedDialIcon />}
        onClick={toggleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.to}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={e => {
              // e.stopPropagation();
              navigate(action.to);
            }}
          />
        ))}
      </SpeedDial>
    </WrapperMenu>
  );
}
