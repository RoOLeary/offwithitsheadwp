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
                {posts.map((post) =>
                <div className="single-post" value={post.id}>
                    <h3><Link key={post.id} to={`/posts/${post.slug}`}>{post.title.rendered}</Link></h3>
                    <small> (Ha Ha Ha)</small>
                    <p>{post.date_gmt}</p>
                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                    <Link key={post.id} to={`/posts/${post.slug}`} style={{marginRight: '10px'}}>Go TO {post.title.rendered}</Link>
                </div>)}
            </div>
        )
    }

}
export default PostList;