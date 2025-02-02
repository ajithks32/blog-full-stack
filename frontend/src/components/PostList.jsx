import React, { useState, useEffect, useMemo, useCallback } from "react";
import PostItem from "./PostItem";
import "./postlist.css";

const PostList = ({ posts, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [visiblePosts, setVisiblePosts] = useState(8);
  const postsPerPage = 8;

  // Memoize filtered posts
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [posts, searchQuery]);

  // Memoize sorted posts
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      if (sortOption === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [filteredPosts, sortOption]);

  // Get visible posts
  const currentPosts = useMemo(
    () => sortedPosts.slice(0, visiblePosts),
    [sortedPosts, visiblePosts]
  );

  // Event handler for Load More, memoized with useCallback
  const handleLoadMore = useCallback(() => {
    setVisiblePosts((prev) => prev + postsPerPage);
  }, []);

  return (
    <div className="container mt-4">
      {/* Search and Sorting */}
      <div className="row search mb-5 justify-content-end">
        <div className="col-auto">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <select
            className="form-select form-select-sm"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      <div className="row">
        {/* Display filtered and sorted posts */}
        {currentPosts.length === 0 ? (
          <p className="text-center">No posts available.</p>
        ) : (
          currentPosts.map((post) => (
            <div className="col-md-4 col-lg-3" key={post._id}>
              <PostItem post={post} onDelete={onDelete} />
            </div>
          ))
        )}
      </div>

      {/* Load More button */}
      {visiblePosts < sortedPosts.length && (
        <div className="text-center mt-4 mb-4">
          <button className="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
