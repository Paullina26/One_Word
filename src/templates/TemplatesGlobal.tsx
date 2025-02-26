import Background from '@components/Background/Background';
import Navigation from '@components/Navigation/Navigation';
import ComponentDisplay from '@components/Shared/containers/ComponentDisplay';
import Burger from '@components/Navigation/BurgerMenu';
import LoadingFullView from '@components/Shared/Loading/LoadingFullView';
import ErrorFullView from '@components/Shared/Error/ErrorFullView';
import AppVersion from '@components/AppVersion/AppVerion';
import { useUserStore } from '@utils/store/userStore';
import { useUIStore } from '@utils/store/uiStore';

interface TemplatesGlobalProps {
  children: React.ReactNode;
}

const TemplatesGlobal: React.FC<TemplatesGlobalProps> = props => {
  const { isLoginUser } = useUserStore();
  const { isOpenMenu, isLoadingOpen, isErrorOpen } = useUIStore();

  return (
    <>
      {isLoginUser && <Burger isOpenMenu={isOpenMenu} />}
      <Navigation isOpenMenu={isOpenMenu} />
      <Background />
      <ComponentDisplay>
        {isLoadingOpen && <LoadingFullView />}
        {isErrorOpen && <ErrorFullView />}
        {props.children}
      </ComponentDisplay>
      <AppVersion />
    </>
  );
};

export default TemplatesGlobal;
