import {GetServerSideProps} from "next";
import axiosApi from "../axiosApi";
import {ApiPostsList, Post} from "../types";
import React from "react";
import PostBody from "./components/PostBody/PostBody";

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({posts}) => {
  return (
    <div className="container">
      <h1 className='text-center mt-5'>Posts</h1>
      <div className='d-flex flex-column align-items-center'>
        {posts ? posts.map(post => (
          <PostBody key={post.id} post={post}/>
        )) : ''}
      </div>

    </div>
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
