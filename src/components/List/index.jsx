// libraries
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// api
import { getPosts, deletePost } from 'api/posts';
// styles
import './list.css';

const List = () => {
    const postDataSliceStart = 0;
    const postDataSliceEnd = 10;

    const [postsList, setPostsList] = useState([]);

    const fetchPosts = useCallback(
        async () => {
            try {
                const data = await getPosts() || [];

                const postsData = data.slice(postDataSliceStart, postDataSliceEnd);

                setPostsList(postsData);
            } catch (e) {
                console.log(e);
            }
        },
        [],
    );

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const deleteThisPost = id => {
        deletePost(id);
    };

    return (
        <>
            <h1>Posts!</h1>
            {postsList.map(post =>
                (
                    <div key={post.id}>
                        <Link
                            className="post-link"
                            to={`/post/${post.id}`}
                        >
                            {post.title}
                        </Link>
                        <button
                            type="button"
                            onClick={() => deleteThisPost(post.id)}
                        >
                      Delete
                        </button>
                    </div>
                )
            )}
            <Link
                className="post-link"
                to="/newpost"
            >
                <div><button type="button">Creat Post</button></div>
            </Link>
        </>
    );
};

export default List;
