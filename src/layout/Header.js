import logo from '../assets/logo.png';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <header>
      <img src={logo} alt='little lemon logo' />
      <Nav />
    </header>
  );
};

export default Header;
