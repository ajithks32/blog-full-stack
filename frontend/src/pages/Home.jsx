import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Slices/postsSlice";
import PostList from "../components/PostList";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading posts...</p>}
      {error && <p>Error: {error}</p>}
      <PostList posts={posts} onDelete={() => dispatch(fetchPosts())} />
    </div>
  );
};

export default Home;
