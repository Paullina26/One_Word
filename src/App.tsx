import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@style/theme';
import { GlobalStyle } from '@style/GlobalStyle';
import RoutesComponent from './routes';
import TemplatesGlobal from '@templates/TemplatesGlobal';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useUIStore } from '@utils/store/uiStore';
import { useUserStore } from '@utils/store/userStore';

function App() {
  const { setIsOpenMenu } = useUIStore();
  const { checkLoginStatus } = useUserStore();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TemplatesGlobal>
          <RoutesComponent />
        </TemplatesGlobal>
      </ThemeProvider>
      <ToastContainer />
    </Router>
  );
}
export default App;
