import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <div className='nav-logo'>
                    <a href="#">Reader Café</a>
                </div>
                <div className='nav-user'>
                    <a href="#"><img src="https://avatars.githubusercontent.com/u/8621487?v=4" alt="" /></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;