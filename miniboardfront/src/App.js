/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from './common/Global/Reset';
import AuthRoute from './components/AuthRoute/AuthRoute';
import Main from './pages/MainPage/Main';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import BoardWrite from './pages/Board/WriteBoard/BoardWrite';
import BoardRead from './pages/Board/ReadBoard/BoardRead';


const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  margin: 100px auto;
  width: 1200px;

  overflow: auto;
border: 1px solid #121212;
`;

function App() {
  return (
  <div css={container}>
    <Global css={Reset}/>
    <Routes>
      <Route path="/" element={<AuthRoute path="/" element={<Main/>}/>}/>
      <Route path="/auth/login" element={<AuthRoute path="/auth/login" element={<Login/>}/>}/>
      <Route path="/auth/register" element={<AuthRoute path="/auth/register" element={<Register/>}/>}/>
      <Route path="/auth/home" element={<AuthRoute path="/auth/home" element={<Main/>}/>}/>
      <Route path="/mini/write/board" element={<AuthRoute path="/mini/write/board" element={<BoardWrite/>}/>}/>
      <Route path="/mini/board/:boardId" element={<AuthRoute path="/mini/board" element={<BoardRead/>}/>}/>

    </Routes>
  </div>
  );
}

export default App;
