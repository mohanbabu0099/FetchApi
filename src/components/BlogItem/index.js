import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, title, topic, avatarUrl, author} = blogData

  return (
    <Link to={`/blogs/:${id}`}>
      <div className="container">
        <img src={imageUrl} alt={topic} className="img-cont" />
        <p className="p1">{avatarUrl}</p>
        <p className="p1">{author}</p>
        <p className="p1">{title}</p>
        <p className="p1">{topic}</p>
      </div>
    </Link>
  )
}

export default BlogItem
