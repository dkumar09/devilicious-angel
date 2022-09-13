import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../themes/ThemesContext';

import "./Header.scss";

const Header = ({ cartItems }) => {

    const [darkMode, setDarkMode] = useState(true);
    const { theme, changeTheme } = useContext(ThemeContext)
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to="/" className='logo'>

                        PsyCart

                    </Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button className='mode-button' onClick={() => { setDarkMode(!darkMode); changeTheme(darkMode ? themes.light : themes.dark); }}>
                            <span style={{ fontSize: "20px" }}>{darkMode ? <i class="fas fa-toggle-on"></i> : <i class="fas fa-toggle-off"></i>}</span>
                        </button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart ">
                            <i class="fas fa-shopping-cart" />
                            <span className='cart-length'>
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
