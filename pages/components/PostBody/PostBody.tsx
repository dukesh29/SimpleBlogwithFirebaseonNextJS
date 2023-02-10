import React from "react";
import Link from "next/link";
import {Post} from "../../../types";

interface Props {
  post: Post;
}

const PostBody: React.FC<Props> = ({post}) => {

  return (
    <div className="card w-75 bg-light">
      <div className="card-body d-flex flex-column gap-2 align-items-center">
        <h4 className='text-center'>{post.title}</h4>
        <h6>Автор: {post.author}</h6>
        <Link href={`posts/${post.id}`} className="btn btn-dark">Читать далее..</Link>
      </div>
    </div>
  );
};

export default PostBody;