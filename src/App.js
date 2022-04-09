import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Pro from './Components/ProFeatures/Pro';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='main-bg'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/pro-features' element={
          <RequireAuth>
            <Pro></Pro>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
