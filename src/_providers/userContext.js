import React, { useState, useEffect, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import {isAuthenticated} from '../_services/AuthService';

import Landing from '../components/Landing';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const location = useLocation();
	const [ currentUser, setCurrentUser ] = useState(undefined);
	const [ pageTitle, setPageTitle ] = useState();

	useEffect(() => {
		const {pathname} = location;
		const firstPath = pathname.split('/')[1];
		const spl = firstPath.split('-').join(' ');
		setPageTitle(spl)
	}, [location]);

	useEffect(() => {
		const checkLoggedIn = async () => {
			let cuser = isAuthenticated();
			if (cuser === null) {
				localStorage.setItem('user', '');
				cuser = null;
			}

			setCurrentUser(cuser);
		};

		checkLoggedIn();
	}, [location]);

	return (
		<UserContext.Provider value={{currentUser, pageTitle}}>
			{ currentUser ? children : <Landing />}
		</UserContext.Provider>
	);
};


export default UserContext;