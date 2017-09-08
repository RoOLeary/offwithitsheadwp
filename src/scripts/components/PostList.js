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
                             <h5>Categories:</h5>
                            <ul className="categories">
                                {post.cats.map((cats, term_id) =>
                                <li key={term_id}>
                                    <Link to={`/posts/${post.cats[term_id].slug}`}>
                                        {post.cats[term_id].name}
                                    </Link>
                                </li>
                                )}
                            </ul>
                            <p>{post.date_gmt}</p>
                            <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                            <Link key={i} to={`/posts/${post.slug}`} style={{marginRight: '10px'}}>Go TO {post.title.rendered}</Link>
                        </div>
                        
                        )}
                    </div>
                </div>
            </div>
        )
    }

}
export default PostList;