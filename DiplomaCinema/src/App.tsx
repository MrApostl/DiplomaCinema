import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material'
import './App.css'
import { Logo, Menu, SearchBar } from './components'
import { MoviesContainer } from './components/MoviesContainer'

function App() {
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#282c34', minHeight: '100vh', color: 'white', width: '1240px' }}>
            <CssBaseline />
            <AppBar position="static" sx={{ backgroundColor: '#1c1c1c' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Logo text="pixema" />
                    <Menu items={['Home', 'Trends', 'Favorites', 'Settings']} />
                </Toolbar>
            </AppBar>
            <SearchBar placeholder="Search" />
            <MoviesContainer/>
        </Box>
    </div> 
  )
}

export default App
