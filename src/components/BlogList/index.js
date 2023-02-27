import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount = () => {
    this.getBlogsItem()
  }

  getBlogsItem = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(item => ({
      id: item.id,
      author: item.author,
      avatarUrl: item.avatar_url,
      title: item.title,
      topic: item.topic,
      imageUrl: item.image_url,
    }))

    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="Tailspin" height={100} width={100} color="#00fdda" />
        ) : (
          <ul>
            {blogsData.map(text => (
              <BlogItem blogData={text} key={text.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
