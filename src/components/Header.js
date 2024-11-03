import Logo from '../assets/img/logo.jpg';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className='content-container'>
        <a href='/' className='img-header-link'>
          <img className='img-header-logo' src={Logo} alt='Little Lemon Logo' />
        </a>
        <Nav />
      </div>
    </header>
  )
}

export default Header;