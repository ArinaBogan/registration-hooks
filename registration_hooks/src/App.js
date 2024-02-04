import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegPage from './pages/RegPage/RegPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/reg' element={<RegPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
