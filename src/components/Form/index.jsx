// libraries
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
// api
import { createNewPost, getPost } from 'api/posts';
//style
import './index.css';

const Form = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    const history = useHistory();
    const isEditPost = pathname.includes('edit');
    const [postData, setPostData] = useState({ title: '', body: '' });

    const fetchPosts = useCallback(
        async () => {
            if (!isEditPost) {
                return;
            }
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

    const handleChange = event => {
        const { name } = event.target;
        const { value } = event.target;

        setPostData({
            [name]: value,
        })

    }
    const handleSubmit = event => {
        event.preventDefault();
        try {
            const title = event.target.title.value;
            const body = event.target.body.value;
            const data = {
                title,
                body,
            };

            createNewPost(data);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="form_style">
            <h3>Creat new post</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputTitle">Title</label>
                <input
                    onChange={handleChange}
                    value={postData.title}
                    name="title"
                    type="text"
                    id="inputTitle"
                    className="input_style"
                />
                <label htmlFor="textTitle">Body</label>
                <textarea
                    onChange={handleChange}
                    value={postData.body}
                    name="body"
                    id="textTitle"
                    cols="18"
                    rows="10"
                    className="input_style"
                >
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
