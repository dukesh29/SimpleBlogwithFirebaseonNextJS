export interface ApiPost {
  author: string;
  title: string;
  text: string;
  datetime: string;
}

export interface Post extends ApiPost {
  id: string;
}

export interface PostMutation {
  author: string;
  title: string;
  text: string;
}

export interface ApiPostsList {
  [id: string]: ApiPost;
}