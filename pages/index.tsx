import {GetServerSideProps} from "next";
import axiosApi from "../axiosApi";
import {ApiPostsList, Post} from "../types";
import React from "react";

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({posts}) => {
  return (
    <>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosApi.get<ApiPostsList | null>('/posts.json');
  const posts = response.data;
  let newPosts: Post[] = [];

  if (posts) {
    newPosts = Object.keys(posts).map(id => ({
      ...posts[id],
      id,
    }));
  }

  return {
    props: {
      posts: newPosts
    },
  }
};

export default Home;
