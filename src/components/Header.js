import Logo from '../assets/img/logo.jpg';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div class='content-container'>
        <a href='/' class='img-header-link'>
          <img class='img-header-logo' src={Logo} alt='Little Lemon Logo' />
        </a>
        <Nav />
      </div>
    </header>
  )
}

export default Header;