import { sendRequest } from './index';

export const getPosts = () => {
    return sendRequest('posts');
};

export const getPost = id => {
    return sendRequest(`posts/${id}`);
};

export const deletePost = id => {
    return sendRequest(`posts/${id}`, 'DELETE');
};

export const createNewPost = (data) => {
    return sendRequest('posts', 'POST', data);
};

export const editPost = (id, data) => {
    return sendRequest(`posts/${id}`, 'PUT', data);
};