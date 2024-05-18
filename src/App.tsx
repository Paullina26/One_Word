import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import { GlobalStyle } from 'style/GlobalStyle';
import RoutesComponent from 'routes';
import GlobalProvider from 'utils/GlobalContext';
import TemplatesGlobal from 'templates/TemplatesGlobal';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalProvider>
          <TemplatesGlobal>
            <RoutesComponent />
          </TemplatesGlobal>
        </GlobalProvider>
      </ThemeProvider>
      <ToastContainer />
    </Router>
  );
}
export default App;
