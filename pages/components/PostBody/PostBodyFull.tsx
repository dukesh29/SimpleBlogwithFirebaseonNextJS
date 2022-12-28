import React from "react";
import {ApiPost} from "../../../types";
import Link from "next/link";

interface Props {
  post: ApiPost;
}

const PostBodyFull: React.FC<Props> = ({post}) => {

  return (
    <div className="card w-50 bg-light">
      <div className="card-body d-flex flex-column align-items-center">
        <h4>{post.title}</h4>
        <h6>Created on:<span className="fs-6 fst-italic fw-light pe-2"> {post.datetime} </span> by {post.author}</h6>
        <p className="my-3 fs-3 text-center">{post.text}</p>
        <Link href={`/`} className=" btn btn-dark">Back</Link>
      </div>
    </div>
  );
};

export default PostBodyFull;