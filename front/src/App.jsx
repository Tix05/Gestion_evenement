import { Routes, Route } from 'react-router-dom';
import Login_organisateur from './pages/page_organisateur/login_organisateur';
import Login from './pages/page_participant/login';
import Acceuil from './pages/page_participant/Acceuil';
import Apropos from './pages/page_participant/Apropos';
import Dashboard from '../../front/src/pages/page_organisateur/Dashboard';
import ListeEvenement from './pages/page_organisateur/ListeEvenement';

function App() {

  return (
    <Routes>
      <Route path='/login_admin' element={<Login_organisateur />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Acceuil />} />
      <Route path='/a-propos' element={<Apropos />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/list-event' element={<ListeEvenement />} />
    </Routes>
  )
}

export default App
