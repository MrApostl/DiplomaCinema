import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material'
import './App.css'
import { Logo, Menu, SearchBar, UserProfile, RegistrationActivate, RegistrationConfirm, RegistrationSuccess, SignIn, SignUp } from './components'
import { MovieDetail, MoviesContainer } from './components/MoviesContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { getUser } from './redux/action-creaters'
import { IStoreState } from './types'
import { Uncertain } from './components/Uncertain'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      if(localStorage.getItem('access')){
        dispatch(getUser());
      }
  }, []);

  console.log(localStorage.getItem('access'));
  

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
                  <Menu items={['Главная', 'Фильмы', 'Тренды', 'Настройки']} />
                </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/">
                <Route index element={isUserAutorized ? <Uncertain text={' Добро пожаловать в pixema '}/> : <SignIn/>}/>

              <Route path='signUp' element={isUserAutorized ? <Uncertain text={' Вы уже вошли в аккаунт'}/> : <SignUp/>}/>

              <Route path='registrationConfirm' element={isUserAutorized ? <Uncertain text={' Вы уже вошли в аккаунт'}/> : <RegistrationConfirm/>}/>
              <Route path='registrationSuccess' element={isUserAutorized ? <Uncertain text={' Вы уже вошли в аккаунт'}/> : <RegistrationSuccess/>}/>
              <Route path='/:uid/:token' element={isUserAutorized ? <Uncertain text={' Вы уже вошли в аккаунт'}/> : <RegistrationActivate/>}/>

                <Route path="*" element={<Uncertain text={'Страница не найдена'}/>}/>
                <Route path="movies">
                  <Route index element={ 
                    !isUserAutorized ? <Uncertain text={'Вы не вошли в аккаунт'}/> :
                    <Box sx={{ width: '100%', mt: 2 }}> 
                      <SearchBar placeholder="Поиск..." />
                      <MoviesContainer/>
                    </Box>
                  }/>
                  <Route path=":id" element={!isUserAutorized ? <Uncertain text={'Вы не вошли в аккаунт'}/> : <MovieDetail/>}/>
                </Route>

                <Route path="trends" element={!isUserAutorized ? <Uncertain text={'Вы не вошли в аккаунт'}/> : <Uncertain text={'Избранные'}/>} />
                <Route path="settings" element={!isUserAutorized ? <Uncertain text={'Вы не вошли в аккаунт'}/> : <Uncertain text={'Настройки'}/>} />
              </Route>
            </Routes>
        </Box>
    </BrowserRouter> 
  )
}

export default App
