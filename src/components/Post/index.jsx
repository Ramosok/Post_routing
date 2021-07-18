// libraries
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// api
import { getPost } from 'api/posts';

const Post = () => {
    const { id } = useParams();
    const [postData, setPostData] = useState({});

    const fetchPosts = useCallback(
        async () => {
            try {
                const data = await getPost(id) || {};

                setPostData(data);
            } catch (e) {
                console.log(e);
            }
        },
        [id],
    );

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
        </>
    );
};

export default Post;
