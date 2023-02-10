import {GetServerSideProps} from "next";
import {ApiPostsList, Post} from "../types";
import React from "react";
import PostBody from "./components/PostBody/PostBody";
import Link from "next/link";
import axiosApi2 from "../axiosApi2";

interface Props {
  posts: Post[];
}

const OnePost: React.FC<Props> = ({posts}) => {
  return (
    <div className="container d-flex flex-column gap-3">
      <h1 className='text-center mt-4'>Все посты</h1>
      <Link href={`/PostForm`} className="btn btn-dark align-self-center">Добавить новый пост</Link>
      <div className='d-flex flex-column align-items-center gap-3'>
        {posts ? posts.map(post => (
          <PostBody key={post.id} post={post}/>
        )) : ''}
      </div>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosApi2.get<ApiPostsList | null>('/posts.json');
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

export default OnePost;
