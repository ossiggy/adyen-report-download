import Display from './Display';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar>
        <NavbarBrand>Reports</NavbarBrand>
      </Navbar>
      <Display />
    </div>
  );
}

export default App;
