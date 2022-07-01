import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import UserContext from '../_providers/userContext';

const Profile = () => {
    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext)
    const {username, email, address, phone} = currentUser;
    const addressLabel = `${address.street}, ${address.suite}, ${address.city}`

    const handleBack = () => {
        navigate(-1);
    }
    return ( 
        <div>
            <button onClick={handleBack} className="unbordered-btn"><FontAwesomeIcon icon={faArrowLeft} /></button>
            <table className='text-small'>
                <tbody>
                    <tr>
                        <td>Username</td>
                        <td><b>: {username}</b></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><b>: {email}</b></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td><b>: {addressLabel}</b></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td><b>: {phone}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Profile;