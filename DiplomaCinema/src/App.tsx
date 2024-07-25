import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material'
import './App.css'
import { Logo, Menu, SearchBar, UserProfile } from './components'
import { MovieDetail, MoviesContainer } from './components/MoviesContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/SignUser'
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { getUser } from './redux/action-creaters'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      if(localStorage.getItem('access')){
        dispatch(getUser());
      }
  }, []);

  
  return (
    <BrowserRouter>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#34282a',
            minHeight: '100vh',
            color: 'white',
            maxWidth: '1240px',
            mx: 'auto', 
            px: { xs: 1, sm: 2, md: 3, lg: 4 },
            boxSizing: 'border-box',
          }}
        >
            <CssBaseline />
            <AppBar position="static" sx={{ backgroundColor: '#1c1c1c', width: '100%' }}>
                <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', py: 1 }}>
                    <Logo text="pixema" />
                    <UserProfile/>
                </Toolbar>
                <Toolbar sx={{ justifyContent: 'center', flexWrap: 'wrap', py: 1 }}>
                  <Menu items={['Home', 'Movies', 'Favorites', 'Settings']} />
                </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/">
                <Route index element={ 
                  <Box sx={{ width: '100%', mt: 2 }}>
                    <SignIn/>
                  </Box>
                }/>

                <Route path="*" element={<Box>Страница не найдена</Box>}/>
                <Route path="movies">
                  <Route index element={ 
                    <Box sx={{ width: '100%', mt: 2 }}>
                      <SearchBar placeholder="Search" />
                      <MoviesContainer/>
                    </Box>
                  }/>
                  <Route path=":id" element={<MovieDetail/>}/>
                </Route>

                <Route path="favorites" element={
                  <Box sx={{ width: '100%', mt: 2 }}>
                    Избранные
                  </Box>} />
                <Route path="settings" element={
                  <Box sx={{ width: '100%', mt: 2 }}>
                    Настройки
                  </Box>
                } />
              </Route>
            </Routes>
        </Box>
    </BrowserRouter> 
  )
}

export default App
