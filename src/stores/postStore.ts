import { action, observable, makeObservable, runInAction } from 'mobx';
const axios = require('axios');

export interface Post {
  title: string;
  body: string;
}

interface PostStore {
  post: Post | null;
  addPost: (u: Post) => void;
}

class postStore implements PostStore {

  post = null;


  constructor() {
    makeObservable(this, {
      post: observable,
      addPost: action
    })
  }

  public async addPost(post) {
    try {
      const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', { ...post, userId: Math.random() });
      this.post = resp.data;
    } catch (error) {

    }
  }
}

export default new postStore();