import './PostCard.css'

// PostCard handles 3 different kinds of posts:
//   - "regular"     a normal feed post with image, caption, comments
//   - "sponsored"   a fake ad
//   - "commentary"  the gray dividers that yell at you for scrolling
function PostCard(props) {
  const post = props.post

  // commentary dividers
  if (post.type === 'commentary') {
    let divClass = 'commentary'
    if (post.warning) {
      divClass = 'commentary warning'
    }
    return (
      <div className={divClass}>
        {post.text}
      </div>
    )
  }

  // sponsored / ad post
  if (post.type === 'sponsored') {
    return (
      <div className="post-card sponsored">
        <div className="sponsored-badge">SPONSORED</div>
        <div className="post-header">
          <div className="avatar">{post.avatar}</div>
          <div className="post-meta">
            <span className="post-username">{post.brandName}</span>
            <span className="promoted-label">PROMOTED</span>
          </div>
        </div>
        <div className="ad-copy">{post.tagline}</div>
        <div className="ad-image">[AD IMAGE]</div>
        <div className="ad-footer">
          <span className="ad-url">{post.url}</span>
          <button className="ad-cta">SHOP NOW ►</button>
        </div>
      </div>
    )
  }

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

      {/* loop through the comments and show each one */}
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
