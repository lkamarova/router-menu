import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
