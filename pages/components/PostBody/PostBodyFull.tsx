import React from "react";
import {Post} from "../../../types";
import Link from "next/link";
import dayjs from "dayjs";
import axiosApi2 from "../../../axiosApi2";
import {useRouter} from "next/navigation";

interface Props {
  post: Post;
}

const PostBodyFull: React.FC<Props> = ({post}) => {

  const navigation = useRouter();

  const deleteItem = async (id: string) => {
    await axiosApi2.delete('/posts/' + id + '.json');
    navigation.push('/');
  };

  return (
    <div className="card w-75 bg-light">
      <div className="card-body d-flex flex-column align-items-center">
        <h2 className='text-center mb-3'>{post.title}</h2>
        <h6>Создан: <span
          className="fs-6 fst-italic fw-light pe-2"> {dayjs(post.datetime).format('YYYY-MM-DD HH:mm')} </span> Автор: {post.author}
        </h6>
        <p className="my-5 fs-5 text-center">{post.text}</p>
        <div className='d-flex gap-3'>
          <button type='button' onClick={() => deleteItem(post.id)} className=" btn btn-dark">Удалить</button>
          <Link href={`/`} className=" btn btn-dark">Назад</Link>
        </div>
      </div>
    </div>
  );
};

export default PostBodyFull;