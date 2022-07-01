import {Routes, Route} from 'react-router-dom';
import Profile from '../Profile';
import PostDetail from './PostDetail';
import PostList from './PostList';

const Post = () => {
    return (
        <div className='post'>
        <Routes>
            <Route path='/post' element={<PostList/>} />
            <Route path='/post-detail/:id/:author/:comment' element={<PostDetail/>} />
            <Route path='/user-profile' element={<Profile/>} />
        </Routes>
        </div>
     );
}
 
export default Post;