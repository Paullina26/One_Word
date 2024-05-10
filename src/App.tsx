import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import { GlobalStyle } from 'style/GlobalStyle';
import RoutesComponent from 'routes';
import GlobalProvider from 'utils/GlobalContext';
import TemplatesGlobal from 'templates/TemplatesGlobal';
import UserSettingsProvider from 'utils/ContextSettingsUser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalProvider>
          <UserSettingsProvider>
            <TemplatesGlobal>
              <RoutesComponent />
            </TemplatesGlobal>
          </UserSettingsProvider>
        </GlobalProvider>
      </ThemeProvider>
      <ToastContainer />
    </Router>
  );
}
export default App;
