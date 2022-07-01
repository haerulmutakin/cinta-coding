import { useContext, Fragment, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import userContext from '../_providers/userContext';

const Navbar = () => {
    const {currentUser, pageTitle} = useContext(userContext)
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState(false)

    const handleProfileDetail = () => {
        hideDropdown();
        navigate('/user-profile');
    }

    const handleLogout = () => {
        hideDropdown();
        localStorage.removeItem('user');
        navigate('/');
    }

    const hideDropdown = () => {
        setDropdown(!dropdown)
    }
    return ( 
        <div>
            <div className="navbar">
                <div className="navbar-brand">
                    Cinta Koding
                </div>
                {currentUser?.username ? (
                    <Fragment>
                        <div className="navbar-page-title">{pageTitle}</div>
                        <div className="navbar-profile">
                            Welcome, <span onClick={() => setDropdown(!dropdown)} className='user-profile-btn'>{currentUser.username} <FontAwesomeIcon icon={faCaretDown} /></span>
                            {dropdown && (
                                <ul className='dropdown-profile'>
                                    <li onClick={handleProfileDetail}>Detail Profile</li>
                                    <li onClick={handleLogout}>Logout</li>
                                </ul>
                            )}
                        </div>
                    </Fragment>
                ) : (
                    <div className="navbar-profile">
                        <NavLink to="/login">Login</NavLink>
                    </div>
                )}
            </div>
            {dropdown && (
                <div className='backdrop' onClick={hideDropdown}></div>
            )}
        </div>
     );
}
 
export default Navbar;