import Api from '../api/json-placeholder.api';

export const login = async (username, password) => {
    let authenticated = false;
    const res = await Api.get(`users?username=${username}`)
    const {data} = res;
    if(data.length > 0) {
        localStorage.setItem('user', JSON.stringify(data[0]));
        authenticated = true;
    }
    return authenticated;

};
export const isAuthenticated = () => {
	const user = localStorage.getItem('user');
	if (!user) {
		return {}
	}
	return JSON.parse(user);
};

export default login;