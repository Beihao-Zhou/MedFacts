import axios from 'axios';

const API = axios.create({ baseURL: 'https://medfacts.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${ searchQuery.search || 'none' }&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchProf = (id) => API.get(`/profs/${id}`);
export const fetchProfs = (page) => API.get(`/profs?page=${page}`);
export const fetchProfsBySearch = (searchQuery) => API.get(`/profs/search?searchQuery=${ searchQuery || 'none' }`);

export const fetchConversations = (id) => API.get(`/conversations/${id}`);
export const fetchConversation = (senderId, receiverId) => API.get(`/conversations/${senderId}/${receiverId}`);
export const createConversation = (newConversation) => API.post('/conversations', newConversation);
export const fetchMessages = (conversationId) => API.get(`/messages/${conversationId}`);
export const postMessage = (newMessage) => API.post('/messages', newMessage);
