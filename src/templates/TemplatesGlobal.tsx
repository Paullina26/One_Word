import { GlobalContext } from 'utils/GlobalContext';
import { useContext } from 'react';
import Navigation from 'components/Navigation/Navigation';
import ComponentDisplay from 'components/Shared/containers/ComponentDisplay';
import Burger from 'components/Navigation/BurgerMenu';
import Background from 'components/Background/Background';
interface TemplatesGlobalProps {
  children: React.ReactNode;
}

const TemplatesGlobal: React.FC<TemplatesGlobalProps> = props => {
  const { isOpenMenu } = useContext(GlobalContext);
  const { isLoginUser } = useContext(GlobalContext);
  return (
    <>
      {isLoginUser && <Burger isOpenMenu={isOpenMenu} />}
      <Navigation isOpenMenu={isOpenMenu} />
      <Background />
      <ComponentDisplay>{props.children}</ComponentDisplay>
    </>
  );
};

export default TemplatesGlobal;
