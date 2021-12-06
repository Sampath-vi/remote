import React from 'react';
import postStore, { Post } from '../stores/postStore';
import { observer } from 'mobx-react';
import "../index.css";
import { Modal } from 'antd';

interface AddNewPost {
  post: Post;
  onClick?: () => void;
  onChange?: ({ title, body }) => void;
}


export default observer(({ post: { title = "", body = "" } = { title: "", body: "" }, onClick = () => null, onChange = () => null }: AddNewPost) => {

  const [postTitle, setPostTitle] = React.useState(title);
  const [postBody, setPostBody] = React.useState(body);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    await submitForm();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const submitForm = async () => {
    await postStore.addPost({
      title: postTitle,
      body: postBody,
    });
  };

  const onFormChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "title") {
      onChange({ title: value, body: postBody });
    } else if (name === "body") {
      onChange({ title: postTitle, body: value });
    }
  };

  return (
    <div className="container">
      <button onClick={showModal}>Add New Post</button>
      <Modal title="New Post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{ marginBottom: '10px' }}>
          <label>Title:  </label>
          <input type="text" name="title" value={postTitle} onChange={(e) => {
            onFormChange(e);
            setPostTitle(e.target.value);
          }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Body:  </label>
          <textarea name="body" value={postBody} onChange={(e) => {
            onFormChange(e);
            setPostBody(e.target.value);
          }} />
        </div>
      </Modal>


      <h2>Posts</h2>
      {postStore.posts != null && postStore.posts.map((post, index) => {
        return (
          <div key={index} style={{border: '1px solid grey', borderRadius: '6px', backgroundColor: '#F1F2F3'}}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  );
});