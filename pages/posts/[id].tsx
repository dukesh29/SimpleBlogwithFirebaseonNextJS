import {GetServerSideProps} from "next";
import axiosApi from "../../axiosApi";
import {ApiPost} from "../../types";
import React from "react";
import PostBodyFull from "../components/PostBody/PostBodyFull";

interface Props {
  post: ApiPost;
}

const onePost: React.FC<Props> = ({post}) => {
  return (
    <div className='d-flex flex-column align-items-center mt-5 gap-3'>
      <h1>Your Post</h1>
      <PostBodyFull post={post}/>
    </div>

  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const response = await axiosApi.get <ApiPost | null>('/posts/' + id + '.json');

  if (!response.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: response.data,
    }
  }
};
export default onePost;