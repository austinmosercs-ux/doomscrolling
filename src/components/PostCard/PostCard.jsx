import './PostCard.css'

function PostCard({ post }) {
  // hide the post if the image fails to load
  function handleImageError(e) {
    e.currentTarget.parentElement.remove()
  }

  // regular post
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="avatar">{post.avatar}</div>
        <div className="post-meta">
          <span className="post-username">{post.username}</span>
          <span className="post-time">{post.time}</span>
        </div>
        <span className="post-dots">•••</span>
      </div>

      <img
        className="post-image"
        src={post.imageUrl}
        alt="post"
        onError={handleImageError}
      />

      <div className="post-caption">
        <strong>{post.username}</strong> {post.imageCaption}
      </div>

      <div className="post-comments">
        {post.commentList.map(function (c, i) {
          return (
            <div className="post-comment" key={i}>
              <strong>{c.username}</strong> {c.text}
            </div>
          )
        })}
      </div>

      <div className="engagement">
        <span className="eng-item">▲ {post.likes}</span>
        <span className="eng-item">■ {post.commentCount}</span>
        <span className="eng-item eng-share">►</span>
      </div>
    </div>
  )
}

export default PostCard
