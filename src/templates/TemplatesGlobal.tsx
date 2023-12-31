import styled from 'styled-components';
import { GlobalContext } from 'utils/GlobalContext';
import { useContext, useState } from 'react';
import Background from 'components/Background/Background';
import Logo from 'components/Shared/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import OneWord from 'components/Shared/Logo/OneWord';
import Navigation from 'components/Navigation/Navigation';
import ComponentDisplay from 'components/Shared/containers/ComponentDisplay';
import Burger from 'components/Navigation/BurgerMenu';

interface TemplatesGlobalProps {
  children: React.ReactNode;
}

const TemplatesGlobal: React.FC<TemplatesGlobalProps> = props => {
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);
  const { isLoginUser } = useContext(GlobalContext);

  return (
    <>
      {isLoginUser && <Burger isOpenMenu={isOpenMenu} />}
      <Navigation isOpenMenu={isOpenMenu} />
      <Background />
      <Logo />
      <ComponentDisplay>{props.children}</ComponentDisplay>
    </>
  );
};

export default TemplatesGlobal;
