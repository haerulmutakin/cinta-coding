// import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const CommentList = ({comment}) => {
    return ( 
        <div className="comment-item text-small text-title">
            <div className="comment-user"><h4><FontAwesomeIcon icon={faUser} /> {comment?.email.split('@')[0]}</h4></div>
            <div className="post-desc">
                <div>{comment.body}</div>
            </div>
        </div>
     );
}
 
export default CommentList;