// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogList} = this.props
    return (
      <div className="blog-list-container">
        {blogList.map(eachItem => (
          <BlogItem key={eachItem.id} blogDetails={eachItem} />
        ))}
      </div>
    )
  }
}

export default BlogList
