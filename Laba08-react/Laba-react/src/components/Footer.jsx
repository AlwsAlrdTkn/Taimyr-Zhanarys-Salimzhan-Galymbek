function Footer ({ cartCount = 0 }) {
 return (
 <header className="site-header">
 <a href="#" className="footer">  Шопы чего-то</a>
 <nav>
 <ul className="nav-links">
 <li><a href="#catalog">магазин чего-то не зарегестрирован так что не ищите</a></li>
 <li><a href="#contact">Контакты</a></li>
 </ul>
 </nav>
 <div className="cart">  Корзина: {cartCount}</div>
 </header>
 );
}
export default Footer;