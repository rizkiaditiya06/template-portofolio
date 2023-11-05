import React, { useState } from 'react';
// import ke file css nya
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="" />
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__l">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="icon-home"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className='icon-user-following'></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#resume" className="nav__link">
                                    <i className='icon-graduation'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">&copy;F 2023 - 2024.</span>
                </div>
            </aside>

            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    );
};

export default Sidebar