import {Routes, Route} from 'react-router-dom';
import { UserProvider } from '../_providers/userContext';
import Navbar from "./Navbar";
import Landing from './Landing';
import Post from './Post/Post';
import RouteGuard from '../_helpers/RouteGuard';

const Main = () => {
    return ( 
        <div className="main">
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Landing/>} />
                    <Route 
                        path='*' 
                        element={<RouteGuard>
                            <Post />
                        </RouteGuard>} 
                    />
                </Routes>
            </UserProvider>
        </div>
     );
}
 
export default Main;