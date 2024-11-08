import imgCart from '../assets/img/basket.svg';

const Nav = () => {
  return (
    <nav className='top-menu'>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='/reservations'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'><img src={imgCart} className='cart-icon' alt='cart icon' /></a></li>
      </ul>
    </nav>
  )
}

export default Nav;