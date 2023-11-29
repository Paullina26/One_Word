import Logo from 'components/Shared/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import OneWord from 'components/Shared/Logo/OneWord';
import { GlobalContext } from 'utils/GlobalContext';
import { useContext, FC, useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import * as S from 'components/Navigation/StyleNavigation';

interface NavigationProps {
  // isActive: boolean;
  isOpenMenu: boolean;
}

export const Navigation: FC<NavigationProps> = ({ isOpenMenu }) => {
  const navItemLearning = [
    {
      to: 'learning/todays_word',
      name: 'Today`s word',
    },
    {
      to: 'learning/hangman',
      name: 'Hangman',
    },
    {
      to: 'learning/translate',
      name: 'Translate',
    },
    {
      to: 'learning/flashcard',
      name: 'Flashcard',
    },
    {
      to: 'learning/repeat',
      name: 'Repeat',
    },
  ];
  const navItemSettingsUSer = [
    {
      to: '/settings/add_words',
      name: 'Add Words',
    },
    {
      to: '/settings/learning',
      name: 'Learning',
    },
    {
      to: '/settings/user',
      name: 'User',
    },
  ];

  const navItemLearningRender = navItemLearning.map(item => {
    return (
      <S.StyledLink key={item.name} to={item.to} data-hover={item.name}>
        <p>{item.name}</p>
      </S.StyledLink>
    );
  });

  const navItemSettingsRender = navItemSettingsUSer.map(item => {
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
