import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <div className='nav-logo'>
                    <a href="#">Reader Cafe</a>
                </div>
                <div className='nav-user'>
                    <img src="https://avatars.githubusercontent.com/u/8621487?v=4" alt="" />
                </div>
            </nav>
        </div>
    );
};

export default Header;