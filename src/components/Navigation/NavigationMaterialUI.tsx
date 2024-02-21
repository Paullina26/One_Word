import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import { routes } from 'data/routes';
import { WrapperNavigation } from './StyleNavigation';

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

const NavigationMaterialUI = () => {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen(!open);
  const navigate = useNavigate();

  return (
    <WrapperNavigation>
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
    </WrapperNavigation>
  );
};

export default NavigationMaterialUI;
