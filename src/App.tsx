import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import { GlobalStyle } from 'style/GlobalStyle';
import RoutesComponent from 'routes';
import GlobalProvider from 'utils/GlobalContext';
import TemplatesGlobal from 'templates/TemplatesGlobal';
import UserSettingsProvider from 'utils/ContextSettingsUser';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}
export default App;
