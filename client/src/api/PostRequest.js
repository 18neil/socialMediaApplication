import axios from "axios"

const API = axios.create({baseURL:"http://localhost:5002"})

export const getTimelinePost = (id) => API.get(`/post/${id}/timeline`)

export const likePost = (id, useeId) => API.put(`/post/${id}/like`, {userId:useeId})
