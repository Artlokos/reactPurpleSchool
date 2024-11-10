import './Navbar.css';

function Navbar(){
    return (       
            <>
                <nav className='navbar'>
                    <div><img src="../../../public/navbarLogo.svg" alt="" /></div>
                    <ul className='navbar-list'>
                        <li><a href="#">Поиск фильмов</a></li>
                        <li>
                            <a href="#">Мои фильмы</a>
                            <div className='navbar-list-counter'>1</div>
                        </li>
                        <li>
                            <a href="#">Войти</a>
                            <img src="../../../public/login.svg" alt="" />
                        </li>
                    </ul>
                </nav>
            </>
            );
}
export default Navbar;