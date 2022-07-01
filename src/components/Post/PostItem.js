import { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Api from '../../api/json-placeholder.api';

const PostItem = ({post}) => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState(null);
    const [comments, setComments] = useState(null);

    const getAuthor = () => {
        Api.get(`users?id=${post.userId}`)
            .then(res => {
                const {data} = res;
                if(data.length > 0) {
                    setAuthor(data[0])
                }
            })
    }
    const getComment = () => {
        Api.get(`posts/${post.id}/comments`)
            .then(res => {
                const {data} = res;
                if(data.length > 0) {
                    setComments(data.length);
                }
            })
    }

    const handlePostDetail = () => {
        navigate(`/post-detail/${post.id}/${author?.username}/${comments}`);
    }

    useEffect(() => {
        getAuthor();
        getComment();
    }, [])
    return ( 
        <tr>
            <td className="post-user"><h4>{author?.username}</h4></td>
            <td className="post-desc text-title">
                <div>{post.title}</div>
                <div className="post-action">
                    <span className="post-comment"><FontAwesomeIcon icon={faComment} /> {comments}</span>
                    <button className="unbordered-btn" onClick={handlePostDetail}>Detail</button>
                    {/* <NavLink to={`/post/${post.id}/${author?.username}/${comments}`}>Detail</NavLink> */}
                </div>
            </td>
        </tr>
     );
}
 
export default PostItem;