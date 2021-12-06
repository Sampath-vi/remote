import { action, observable, makeObservable, runInAction } from 'mobx';
const axios = require('axios');

export interface Post {
  title: string;
  body: string;
}

interface PostStore {
  post: Post | null;
  addPost: (u: Post) => void;
  posts: Post[] | null;
}

class postStore implements PostStore {

  post = null;
  posts = JSON.parse(localStorage.getItem('posts')) || [];


  constructor() {
    makeObservable(this, {
      post: observable,
      posts: observable,
      addPost: action
    })
  }

  public async addPost(post) {
    try {
      const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', { ...post, userId: Math.random() });
      this.post = resp.data;
      this.posts.push(this.post);
      localStorage.setItem('posts', JSON.stringify(this.posts));
    } catch (error) {

    }
  }
}

export default new postStore();