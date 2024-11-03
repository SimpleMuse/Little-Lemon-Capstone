import imgCart from '../assets/img/basket.svg';

const Nav = () => {
  return (
    <nav className='top-menu'>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/menu'>Menu</a></li>
        <li><a href='/reservations'>Reservations</a></li>
        <li><a href='/order'>Order Online</a></li>
        <li><a href='/cart'><img src={imgCart} className='cart-icon' alt='cart icon' /></a></li>
      </ul>
    </nav>
  )
}

export default Nav;