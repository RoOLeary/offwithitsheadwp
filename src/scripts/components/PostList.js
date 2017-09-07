import DataStore from 'flux/stores/DataStore.js'; 
import { browserHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 


class PostList extends React.Component{

    componentDidMount(){
        console.log('posts mounted'); 
    }

    render() {
        let posts = DataStore.getAllPosts();
        return (
            <div className="all-posts">
                <div className="row">
                     <div className="container">
                        {posts.map((post, i) =>
                        <div className="single-post" key={i} value={post.id}>
                            <h3><Link to={`/posts/${post.slug}`}>{post.title.rendered}</Link></h3>
                            <small> (Ha Ha Ha)</small>
                            <p>{post.date_gmt}</p>
                            <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                            <Link key={i} to={`/posts/${post.slug}`} style={{marginRight: '10px'}}>Go TO {post.title.rendered}</Link>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }

}
export default PostList;