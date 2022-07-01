import { useEffect, useState } from "react";
import Api from '../../api/json-placeholder.api';
import PostItem from "./PostItem";

const PostList = () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        Api.get(`posts?_page=${page}&_limit=5`)
            .then(res => {
                const data = [...posts, ...res.data]
                setPosts(data)
            })
    }, [page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    }
    return ( 
        <div>
            <input type="text" placeholder="Search" />
            <table>
                <tbody>
                    {posts.map((post) => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </tbody>
            </table>
            <div className="load-more">
                <button className="unbordered-btn load-more-btn" onClick={handleLoadMore}>Load more</button>
            </div>
        </div>
     );
}
 
export default PostList;