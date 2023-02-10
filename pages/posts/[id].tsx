import {GetServerSideProps} from "next";
import {ApiPost, Post} from "../../types";
import React from "react";
import PostBodyFull from "../components/PostBody/PostBodyFull";
import axiosApi2 from "../../axiosApi2";

interface Props {
  post: Post;
}

const onePost: React.FC<Props> = ({post}) => {
  return (
    <div className='d-flex flex-column align-items-center mt-5 gap-3'>
      <PostBodyFull post={post}/>
    </div>

  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const response = await axiosApi2.get <ApiPost | null>('/posts/' + id + '.json');
  const result = response.data;

  if (!response.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: {
        ...result,
        id
      }
    }
  }
};
export default onePost;