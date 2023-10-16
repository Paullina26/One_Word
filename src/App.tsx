import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import { GlobalStyle } from 'style/GlobalStyle';
import RoutesComponent from 'routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesComponent />
      </ThemeProvider>
    </Router>
  );
}
export default App;
