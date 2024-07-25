import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material'
import './App.css'
import { Logo, Menu, SearchBar, UserProfile } from './components'
import { MovieDetail, MoviesContainer } from './components/MoviesContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from './components/SignUser'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { getUser } from './redux/action-creaters'
import { IStoreState } from './types'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      if(localStorage.getItem('access')){
        dispatch(getUser());
      }
  }, []);

  const {user} = useSelector((state: IStoreState) => state.users);
  const isUserAutorized = !!user && Object.keys(user).length > 0;
  
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
                  <Menu items={['Главная', 'Фильмы', 'Любимые', 'Настройки']} />
                </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/">
                <Route index element={ 
                  <Box sx={{ width: '100%', mt: 2 }}>
                    {isUserAutorized ? <Box> Вы уже вошли в аккаунт </Box> : 
                    <SignIn/>}
                  </Box>
                }/>

              <Route path='signUp' element={
                <div>
                  {isUserAutorized ? <Box> Вы уже вошли в аккаунт </Box> : 
                    <SignUp/>}
                </div>
              }/>

                <Route path="*" element={<Box>Страница не найдена</Box>}/>
                <Route path="movies">
                  <Route index element={ 
                    <Box sx={{ width: '100%', mt: 2 }}>
                      {!isUserAutorized ? <Box> Вы не вошли в аккаунт </Box> : 
                      <Box>
                        <SearchBar placeholder="Поиск..." />
                        <MoviesContainer/>
                      </Box> }
                    </Box>
                  }/>
                  <Route path=":id" element={!isUserAutorized ? <Box> Вы не вошли в аккаунт </Box> : <MovieDetail/>}/>
                </Route>

                <Route path="favorites" element={
                  <Box sx={{ width: '100%', mt: 2 }}>
                    {!isUserAutorized ? <Box> Вы не вошли в аккаунт </Box> : 'Избранные'}
                  </Box>} />
                <Route path="settings" element={
                  <Box sx={{ width: '100%', mt: 2 }}>
                    {!isUserAutorized ? <Box> Вы не вошли в аккаунт </Box> : 'Настройки'}
                  </Box>
                } />
              </Route>
            </Routes>
        </Box>
    </BrowserRouter> 
  )
}

export default App
