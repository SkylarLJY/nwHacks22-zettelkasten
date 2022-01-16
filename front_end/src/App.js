import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Search from './pages/Search'
import Trash from './pages/Trash'
import Help from './pages/Help'
import Slipbox from './pages/Slipbox'
import DatabasePage from './pages/Database'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E4C5AF'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/slipbox">
              <Slipbox />
            </Route>
            <Route path="/database">
              <DatabasePage />
            </Route>
            <Route path="/trash">
              <Trash />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
