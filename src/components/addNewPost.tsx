import React from 'react';
import postStore, { Post } from '../stores/postStore';
import { observer } from 'mobx-react';
import "../index.css";

interface AddNewPost {
  post: Post;
  onClick?: () => void;
  onChange?: ({ title, body }) => void;
}


export default observer(({ post: { title = "", body = "" } = { title: "", body: "" }, onClick = () => null, onChange = () => null }: AddNewPost) => {

  const [postTitle, setPostTitle] = React.useState(title);
  const [postBody, setPostBody] = React.useState(body);

  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault();
    postStore.addPost({
      title: postTitle,
      body: postBody,
    });
  };

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      onChange({ title: value, body: postBody });
    } else if (name === "body") {
      onChange({ title: postTitle, body: value });
    }
  };


  return (
    <div className="container">
      <h2>Add New Post</h2>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Title:  </label>
          <input type="text" name="title" value={postTitle} onChange={(e) => {
            onFormChange(e);
            setPostTitle(e.target.value);
          }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Body:  </label>
          <input type="text" name="body" value={postBody} onChange={(e) => {
            onFormChange(e);
            setPostBody(e.target.value);
          }} />
        </div>

        <button type="submit" onClick={onClick || submitForm} value="Submit">Submit</button>
      </form>
    </div>
  );
});