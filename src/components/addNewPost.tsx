import React from 'react';
import postStore, { Post } from '../stores/postStore';
import { observer } from 'mobx-react';
import "../index.css";

export default observer(({ post: { title = "", body = "" } = { title: "", body: "" } }: { post: Post }) => {

  const [postTitle, setPostTitle] = React.useState(title);
  const [postBody, setPostBody] = React.useState(body);

  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    postStore.addPost({
      title: postTitle,
      body: postBody,
    });
  };

  return (
    <div className="container">
      <h2>Add New Post</h2>
      <form>
        <div style={{marginBottom: '10px'}}>
          <label>Title:  </label>
          <input type="text" value={postTitle} onChange={(e) => {
            setPostTitle(e.target.value);
          }} />
        </div>

        <div style={{marginBottom: '20px'}}>
          <label>Body:  </label>
          <input type="text" value={postBody} onChange={(e) => {
            setPostBody(e.target.value);
          }} />
        </div>

        <button type="submit" onClick={submitForm} value="Submit">Submit</button>
      </form>
    </div>
  );
});