import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import Header from './components/Header'
import CollisionDetector from './components/CollisionDetector'
import Introduction from './components/Introduction'
import ProjectGrid from './components/ProjectGrid'
import Section from './components/Section'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    text: {
      primary: `rgba(38, 50, 56, 0.87)`,
      secondary: `rgba(96, 125, 139, 0.54)`,
    }
  },
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <CollisionDetector />
    <Section>
      <Introduction />
    </Section>
    <Section color={grey[50]}>
      <ProjectGrid />
    </Section>
  </ThemeProvider>
);

export default App;
