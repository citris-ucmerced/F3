import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

import Navbar from './navbar/Navbar.js'
import GrantCard from './grant_card/GrantCard.js'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Navbar />
      <GrantCard />
    </ThemeProvider>
  );
}

export default App;
