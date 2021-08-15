// libraries
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// api
import { getPosts, deletePost, createNewPost } from 'api/posts';
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

    const deleteThisPost = async id => {
        try {
            await deletePost(id);
            await fetchPosts();
        } catch (e) {
            console.log(e);
        }
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
                        <Link
                            className="post-link"
                            to={`/edit-post/${post.id}`}
                        >
                            <button
                                type="button"
                                onClick={() => createNewPost(post.id)}
                            >
                        Edit post
                            </button>
                        </Link>
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
