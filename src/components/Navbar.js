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
        navigate('/user-profile');
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }
    return ( 
        <div className="navbar">
            <div className="navbar-brand">
                <h2>Cinta Koding</h2>
            </div>
            {currentUser?.username ? (
                <Fragment>
                    <div className="navbar-page-title">{pageTitle}</div>
                    <div className="navbar-profile">
                        Welcome, <span onClick={() => setDropdown(!dropdown)} className='user-profile-btn'>{currentUser.username} <FontAwesomeIcon icon={faCaretDown} /></span>
                        {dropdown && (
                            // <div className='backdrop'>
                                <ul className='dropdown-profile'>
                                    <li onClick={handleProfileDetail}>Detail Profile</li>
                                    <li onClick={handleLogout}>Logout</li>
                                </ul>
                            // </div>
                        )}
                    </div>
                </Fragment>
            ) : (
                <div className="navbar-profile">
                    <NavLink to="/login">Login</NavLink>
                </div>
            )}
        </div>
     );
}
 
export default Navbar;