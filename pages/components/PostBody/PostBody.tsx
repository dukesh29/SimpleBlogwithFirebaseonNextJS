import React from "react";
import Link from "next/link";
import {Post} from "../../../types";

interface Props {
  post: Post;
}

const PostBody: React.FC<Props> = ({post}) => {

  return (
    <div className="card w-50 bg-light">
      <div className="card-body d-flex flex-column gap-2 align-items-center">
        <h3>{post.title}</h3>
        <h6>Author: {post.author}</h6>
        <Link href={`posts/${post.id}`} className="btn btn-dark">Read more...</Link>
      </div>
    </div>
  );
};

export default PostBody;