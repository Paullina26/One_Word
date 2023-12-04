import { GlobalContext } from 'utils/GlobalContext';
import { useContext, FC, useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import * as S from 'components/Navigation/StyleNavigation';
import { routes } from 'data/routes';

interface NavigationProps {
  // isActive: boolean;
  isOpenMenu: boolean;
}

export const Navigation: FC<NavigationProps> = ({ isOpenMenu }) => {
  const navItemLearning = [
    {
      to: `${routes.TODAYS_WORD.to}`,
      name: `${routes.TODAYS_WORD.name}`,
    },
    {
      to: `${routes.HANGMAN.to}`,
      name: `${routes.HANGMAN.name}`,
    },
    {
      to: `${routes.TRANSLATE.to}`,
      name: `${routes.TRANSLATE.name}`,
    },
    {
      to: `${routes.FLASHCARD.to}`,
      name: `${routes.FLASHCARD.name}`,
    },
    {
      to: `${routes.REPEAT.to}`,
      name: `${routes.REPEAT.name}`,
    },
  ];
  const navItemSettingsUser = [
    {
      to: `${routes.ADD_WORDS.to}`,
      name: `${routes.ADD_WORDS.name}`,
    },
    {
      to: `${routes.LEARNING.to}`,
      name: `${routes.LEARNING.name}`,
    },
    {
      to: `${routes.USER.to}`,
      name: `${routes.USER.name}`,
    },
  ];

  const navItemLearningRender = navItemLearning.map(item => {
    return (
      <S.StyledLink key={item.name} to={item.to} data-hover={item.name}>
        <p>{item.name}</p>
      </S.StyledLink>
    );
  });

  const navItemSettingsRender = navItemSettingsUser.map(item => {
    return (
      <S.StyledLink key={item.name} to={item.to} data-hover={item.name}>
        <p>{item.name}</p>
      </S.StyledLink>
    );
  });

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
