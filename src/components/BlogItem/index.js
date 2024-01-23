// Write your JS code here
import {Link} from 'react-router-dom'

import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogDetails} = this.props
    const {id, imageUrl, topic, title, avatarUrl, author} = blogDetails
    return (
      <Link to={`blogs/${id}`} className="blog-item-link">
        <div className="item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />

          <div className="item-info">
            <p className="item-topic">{topic}</p>

            <h1 className="item-title">{title}</h1>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
