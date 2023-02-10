import React, {useState} from "react";
import {ApiPost, PostMutation} from "../types";
import axiosApi2 from "../axiosApi2";
import {useRouter} from "next/navigation";
import Link from "next/link";

const PostForm: React.FC = () => {
  const navigation = useRouter();

  const [post, setPost] = useState<PostMutation>({
    author: '',
    title: '',
    text: '',
  });

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi2.post<ApiPost>('/posts.json', {
      ...post,
      datetime: new Date().toISOString()
    });

    navigation.push('/');

  };

  return (
    <form onSubmit={onFormSubmit} className='container d-flex flex-column gap-3'>
      <h4 className="mt-5 text-center">Добавить новый пост</h4>
      <div className="form-group">
        <label htmlFor="title" className="mb-1 fw-semibold">Название</label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          value={post.title}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author" className="mb-1 fw-semibold">Автор</label>
        <input
          type="text"
          id="author"
          name="author"
          className="form-control"
          value={post.author}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text" className="mb-1 fw-semibold">Сообщение</label>
        <textarea
          id="text"
          name="text"
          className="form-control"
          style={{minHeight:'300px'}}
          value={post.text}
          onChange={onPostChange}
        />
      </div>
      <div className="d-flex gap-3 justify-content-center">
        <button type="submit" className="btn btn-dark">Создать</button>
        <Link href={`/`} className=" btn btn-dark">Назад</Link>
      </div>
    </form>
  );
};


export default PostForm;
