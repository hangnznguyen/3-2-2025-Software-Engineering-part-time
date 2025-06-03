import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import NavBar from './Components/NavBar';

function App() {
  return (
<>
      <NavBar />
      <AppRoutes />
</>
  );
}

export default App;