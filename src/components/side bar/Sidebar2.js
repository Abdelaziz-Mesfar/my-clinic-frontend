import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/actions/userActionCreators'

import './sidebar2.css'

function Sidebar2(props) {
    const disptach = useDispatch()

    const [toggle, setToggle] = useState('true')
    const toggleMenu = () => {
        setToggle(!toggle)
    }

    const [toggleTheme, setToggleTheme] = useState('false')
    const handleToggleTheme = () => {
        setToggleTheme(!toggleTheme)
    }

    return (
        <>

            {/* <div className={`body ${toggleTheme ? '' : 'dark'}`}> */}
            <nav className={`sidebar ${toggle ? 'close' : ''}`}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
                        </span>
                        <div className="text header-text">
                            <span className="name">MyClinic</span>
                        </div>
                    </div>
                    <i className='bx bx-chevron-right btn toggle' onClick={toggleMenu}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        {/* <li className="search-box">
                            <i className='bx bx-search icon' ></i>
                            <input type="search" placeholder="Search .. " />
                        </li> */}
                        {/* <ul className="menu-links"> */}


                        <li className="">
                            <NavLink to="/dashboard">
                                <a>
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/patients">
                                <a>
                                    <i className='bx bx-group icon' ></i>
                                    <span className="text nav-text">Patients</span>
                                </a>
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/profile">
                                <a>
                                    <i className='bx bx-user-circle icon' ></i>
                                    <span className="text nav-text">Profile</span>
                                </a>
                            </NavLink>
                        </li>
                        {/* <li className="">
                            <a href="#">
                                <i className='bx bx-pie-chart-alt icon' ></i>
                                <span className="text nav-text">analytics</span>
                            </a>
                        </li> */}
                        {/* <li className="">
                            <a href="#">
                                <i className='bx bx-heart icon' ></i>
                                <span className="text nav-text">Likes</span>
                            </a>
                        </li> */}
                        {/* <li className="">
                            <a href="#">
                                <i className='bx bx-wallet icon' ></i>
                                <span className="text nav-text">wallets</span>
                            </a>
                        </li> */}

                        {/* </ul> */}
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a onClick={() => disptach(logout())}>
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>

                        <li className="mode">
                            <div className="moon-sun">
                                <i className='bx bx-moon icon moon' ></i>
                                <i className='bx bx-sun icon sun' ></i>
                            </div>
                            <span className="mode-text text">Dark Mode</span>
                            <div className="toggle-switch" onClick={handleToggleTheme}>
                                <span className="switch"></span>
                            </div>
                        </li>
                    </div>

                </div>
            </nav>
            {/* </div> */}
        </>
    )
}

export default Sidebar2