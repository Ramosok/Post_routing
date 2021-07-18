// libraries
import React, { useState } from 'react';
// api
import { createNewPost } from 'api/posts';
//style
import './index.css';

const Form = () => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log(inputTitle);
        console.log(inputBody);
        createNewPost();
    };

    return (
        <div className="form_style">
            <h3>Creat new post</h3>
            <form>
                <label htmlFor="inputTitle">Title</label>
                <input type="text" id="inputTitle" className="input_style" value={inputTitle} onChange={e => setInputTitle(e.target.value)} />
                <label htmlFor="textTitle">Body</label>
                <textarea
                    name="title"
                    id="textTitle"
                    cols="18"
                    rows="10"
                    value={inputBody}
                    onChange={e => setInputBody(e.target.value)}
                    className="input_style"
                >
                </textarea>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
