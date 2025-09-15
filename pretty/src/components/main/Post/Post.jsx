import './Post.css';

export const Post = () => {
  return (
    <section className="create-post">
      <h3 className="create-post-title">Create a Post</h3>
      <form className="create-post-form">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          rows={3}
        />
        <button type="submit" className="post-btn">
          Post
        </button>
      </form>
    </section>
  );
};