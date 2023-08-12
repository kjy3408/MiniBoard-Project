/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from './common/Global/Reset';
import AuthRoute from './components/AuthRoute/AuthRoute';
import Main from './pages/MainPage/Main';

import SideBar from './components/SideBar/SideBar';
import ModifyBoard from './pages/Board/ModifyBoard/ModifyBoard';
import BoardRead from './pages/Board/ReadBoard/BoardRead';
import BoardWrite from './pages/Board/WriteBoard/BoardWrite';
import FindPassword from './pages/Login/FindPassword';
import FindUsername from './pages/Login/FindUsername';
import Login from './pages/Login/Login';
import AlreadyReadBoard from './pages/MyPage/AlreadyReadBoard';
import MyBoard from './pages/MyPage/MyBoard';
import MyInfo from './pages/MyPage/MyInfo';
import MyPage from './pages/MyPage/MyPage';
import Register from './pages/Register/Register';


const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 50px auto 30px auto;
  width: 1200px;
  overflow: auto;
`;

function App() {
  return (
    <>
      <SideBar />
      <div css={container}>
        <Global styles={Reset} />
        <Routes>
          <Route path="/" element={<AuthRoute path="/" element={<Main/>}/>}/>
          <Route path="/auth/login" element={<AuthRoute path="/auth/login" element={<Login/>}/>}/>
          <Route path="/auth/find/username" element={<AuthRoute path="/auth/find/username" element={<FindUsername/>}/>}/>
          <Route path="/auth/find/password" element={<AuthRoute path="/auth/find/password" element={<FindPassword/>}/>}/>
          <Route path="/auth/register" element={<AuthRoute path="/auth/register" element={<Register/>}/>}/>
          <Route path="/auth/home" element={<AuthRoute path="/auth/home" element={<Main/>}/>}/>
          <Route path="/mini/write/board" element={<AuthRoute path="/mini/write/board" element={<BoardWrite/>}/>}/>
          <Route path="/mini/board/:boardId" element={<AuthRoute path="/mini/board" element={<BoardRead/>}/>}/>
          <Route path="/mypage/:userId" element={<AuthRoute path="/mypage" element={<MyPage/>}/>}/>
          <Route path="/myboard/:userId" element={<AuthRoute path="/myboard" element={<MyBoard/>}/>}/>
          <Route path="/already/read/:userId" element={<AuthRoute path="/already/read" element={<AlreadyReadBoard/>}/>}/>
          <Route path="/myinfo/:userId" element={<AuthRoute path="/myinfo" element={<MyInfo/>}/>}/>
          <Route path="/mypage/modify/:boardId" element={<AuthRoute path="/mypage/momdify" element={<ModifyBoard/>}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
