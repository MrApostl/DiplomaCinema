import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material'
import './App.css'
import { Logo, Menu, SearchBar } from './components'
import { MovieDetail, MoviesContainer } from './components/MoviesContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#34282a',
            minHeight: '100vh',
            color: 'white',
            width: '100%',
            maxWidth: '1240px',
            mx: 'auto', 
            px: 2,
            pb: 2,
            boxSizing: 'border-box',
          }}
        >
            <CssBaseline />
            <AppBar position="static" sx={{ backgroundColor: '#1c1c1c', width: '100%' }}>
                <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Logo text="pixema" />
                    <Menu items={['Home', 'Trends', 'Favorites', 'Settings']} />
                </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/">
                <Route index element={ 
                  <Box sx={{ width: '100%', mt: 2 }}>
                    <SearchBar placeholder="Search" />
                    <MoviesContainer/>
                  </Box>
                }/>

                <Route path="*" element={<Box>Страница не найдена</Box>}/>

                <Route path=":id" element={<MovieDetail/>}/>
              </Route>
            </Routes>
        </Box>
      </BrowserRouter>
    </div> 
  )
}

export default App
