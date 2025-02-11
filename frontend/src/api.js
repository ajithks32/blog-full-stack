import axios from "axios";

const API_URL = "https://blog-full-stack-final.onrender.com/api/posts";

export const fetchPosts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const createPost = async (postData) => {
  try {
    await axios.post(API_URL, postData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};
