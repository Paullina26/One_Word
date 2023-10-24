import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import { GlobalStyle } from 'style/GlobalStyle';
import RoutesComponent from 'routes';
import GlobalProvider from 'utils/GlobalContext';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalProvider>
          <RoutesComponent />
        </GlobalProvider>
      </ThemeProvider>
    </Router>
  );
}
export default App;
