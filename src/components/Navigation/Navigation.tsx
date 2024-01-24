import { GlobalContext } from 'utils/GlobalContext';
import { useContext, FC, useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import * as S from 'components/Navigation/StyleNavigation';
import { routes } from 'data/routes';
import SpeedDialTooltipOpen from './NavigadionMaterialUI';

interface NavigationProps {
  isOpenMenu: boolean;
}

export const Navigation: FC<NavigationProps> = ({ isOpenMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItemLearning = [
    {
      to: `${routes.LEARN_TODAYS_WORD.to}`,
      name: `${routes.LEARN_TODAYS_WORD.name}`,
    },
    {
      to: `${routes.LEARN_HANGMAN.to}`,
      name: `${routes.LEARN_HANGMAN.name}`,
    },
    {
      to: `${routes.LEARN_TRANSLATE.to}`,
      name: `${routes.LEARN_TRANSLATE.name}`,
    },
    {
      to: `${routes.LEARN_FLASHCARD.to}`,
      name: `${routes.LEARN_FLASHCARD.name}`,
    },
    {
      to: `${routes.LEARN_REPEAT.to}`,
      name: `${routes.LEARN_REPEAT.name}`,
    },
  ];
  const navItemSettingsUser = [
    {
      to: `${routes.SETTINGS_ADD_WORDS.to}`,
      name: `${routes.SETTINGS_ADD_WORDS.name}`,
    },
    {
      to: `${routes.SETTINGS_LEARNING.to}`,
      name: `${routes.SETTINGS_LEARNING.name}`,
    },
    {
      to: `${routes.SETTINGS_USER.to}`,
      name: `${routes.SETTINGS_USER.name}`,
    },
  ];

  const navItemLearningRender = navItemLearning.map(item => (
    <S.StyledLink key={item.name} to={item.to} data-hover={item.name}>
      <p>{item.name}</p>
    </S.StyledLink>
  ));

  const navItemSettingsRender = navItemSettingsUser.map(item => (
    <S.StyledLink key={item.name} to={item.to} data-hover={item.name}>
      <p>{item.name}</p>
    </S.StyledLink>
  ));

  return (
    <S.NavigationWrapper $isOpenMenu={isOpenMenu}>
      <S.WrapperNav>
        <S.NavigationElementTitle>Learning</S.NavigationElementTitle>
        {navItemLearningRender}
        <S.NavigationElementTitle>Settings</S.NavigationElementTitle>
        {navItemSettingsRender}
      </S.WrapperNav>
    </S.NavigationWrapper>
  );
};

export default Navigation;
