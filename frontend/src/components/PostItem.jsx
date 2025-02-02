import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../Slices/postsSlice";
import "./PostItem.css"; // Import external CSS for styling

const PostItem = React.memo(({ post }) => {  // Use React.memo to prevent unnecessary re-renders
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // Use useCallback to memoize the function
  const handleDelete = useCallback(() => {
    dispatch(deletePost(post._id));
    setShowModal(false); // Close modal after deletion
  }, [dispatch, post._id]);

  return (
    <>
      {/* Clickable Card */}
      <div
        className="post-card shadow-sm rounded border-0"
        onClick={() => setShowModal(true)}
      >
        {post.image && <img src={`http://localhost:8000/${post.image}`} className="post-card-img" alt="Post" />}
        <div className="post-card-body">
          <h5 className="post-card-title">{post.title}</h5>
          <p className="post-card-text">{post.content}</p>
          <small className="text-primary">Click to read more</small>
        </div>
      </div>

      {/* Modal for Full Content */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content post-modal animate-modal">
              <div className="modal-header">
                <h5 className="modal-title">{post.title}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                {post.image && <img src={`http://localhost:8000/${post.image}`} className="img-fluid mb-3" alt="Post" />}
                <div className="d-flex flex-wrap">
                  <p className ="cate"><strong>Category:</strong> {post.category}</p>
                  <p ><strong>Author:</strong> {post.author}</p>
                  <p><strong>Content:</strong> {post.content}</p>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>Delete</button>
                <button className="btn btn-sm btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default PostItem;
