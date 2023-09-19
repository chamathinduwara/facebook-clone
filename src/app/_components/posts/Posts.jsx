"use client"

import { useDispatch, useSelector } from "react-redux";
import Post from "../post/Post";
import { addAllPost, selectPost } from "../../../redux/features/postSlice";
import { useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  useEffect(() => {
    const fetchData = () => {
      const response = axios
        .get("http://localhost:8080/api/v1/post")
        .then((response) => {
          console.log(response.data);
          dispatch(addAllPost(response.data));
        });
    };
    fetchData();
    console.log(posts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
        ))}
    </div>
  );
};

export default Posts;
