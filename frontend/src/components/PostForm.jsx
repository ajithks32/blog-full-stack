import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../Slices/postsSlice";
import './PostForm.css';

const PostForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    image: null,
  });
  const [fileName, setFileName] = useState("No file chosen");
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      setFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setForm({ ...form, image: null });
    setFileName("No file chosen");
    setPreviewUrl(null);
    document.getElementById("image").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.content || !form.category || !form.author || !form.image) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    dispatch(createPost(formData));

    setForm({ title: "", content: "", category: "", author: "", image: null });
    setFileName("No file chosen");
    setPreviewUrl(null);
    document.getElementById("image").value = "";
  };

  return (
    <div className="post-form-wrappe ">
      <form onSubmit={handleSubmit} className="post-form-container">
        <h3>Add a New Post</h3>

        <div className="form-fields-container">
          {/* Left Side Fields */}
          <div className="left-fields">
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Post Title" value={form.title} 
                onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>

            <div className="form-field">
              <label htmlFor="content">Content</label>
              <textarea id="content" placeholder="Post Content" value={form.content} 
                onChange={(e) => setForm({ ...form, content: e.target.value })} required rows="4" />
            </div>

            <div className="form-field">
              <label htmlFor="category">Category</label>
              <input type="text" id="category" placeholder="Post Category" value={form.category} 
                onChange={(e) => setForm({ ...form, category: e.target.value })} required />
            </div>
          </div>

          {/* Right Side Fields */}
          <div className="right-fields">
            <div className="form-field">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" placeholder="Post Author" value={form.author} 
                onChange={(e) => setForm({ ...form, author: e.target.value })} required />
            </div>

            <div className="form-field file-input">
              <label htmlFor="image">Choose Image</label>
              <input type="file" id="image" onChange={handleFileChange} required />
              <span className="file-name">{fileName}</span>
            </div>

            {/* Submit Button */}
            <div className="form-field button-container">
              <button type="submit">Add Post</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;