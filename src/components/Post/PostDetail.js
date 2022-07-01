import { useEffect, useState } from 'react';
import {useParams, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import Api from '../../api/json-placeholder.api';
import CommentList from './CommentItem';

const PostDetail = () => {
    const { id, author, comment } = useParams();
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([]);

    useEffect(() => {
        Api.get(`posts/${id}`)
        .then(res => {
            setPost(res.data);
        })
    }, [])

    const handleCommentClick = () => {
        Api.get(`posts/${post.id}/comments`)
        .then(res => {
            const {data} = res;
            if(data.length > 0) {
                setComments(data);
            }
        })
    }
    return ( 
        <div>
            <NavLink to={`/post`}><FontAwesomeIcon icon={faArrowLeft} /></NavLink>
            <div className='post-item'>
                <div className="post-item-author"><h4>{author}</h4></div>
                <div className="post-desc">
                    <div className='post-title text-title'>{post?.title}</div>
                    <div className='post-body'>{post?.body}</div>
                    {comments.length === 0 ? (
                        <button className='unbordered-btn text-title' onClick={handleCommentClick}><FontAwesomeIcon icon={faComment} /> {comment}</button>
                    ) : (
                        <div className='text-small text-title'>All comments</div>
                    )}
                    {comments.map((comment) => (
                        <CommentList key={comment.id} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default PostDetail;