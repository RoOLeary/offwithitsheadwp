import DataActions  from 'flux/actions/DataActions.js'; 
import DataStore    from 'flux/stores/DataStore.js';
import { browserHistory } from 'react-router-dom';  
import { Link } from 'react-router-dom';  
import { withRouter } from 'react-router-dom';  

import AnimatedWrapper from "./animated_wrapper.js";

class PostSingleComponent extends React.Component{

    constructor(props){
        super(props); 
        this.state = { 
            posts:[]
        };
    }

    componentDidMount(){
        console.log('single component mounted'); 
    }


    render(){

        let location = this.props.location.pathname.split('/'); 
        console.log(location); 
        let slug = location[2]; 
        let post = DataStore.getPostBySlug(slug);

        return(
            <div className="post-single">
                <h1>{post.title.rendered}</h1> 
                <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                <br />
                <Link to={`/posts`}>Back to Post Index</Link>
            </div>
        );
    }
}   
const PostSingle = AnimatedWrapper(PostSingleComponent); 
export default PostSingle; 