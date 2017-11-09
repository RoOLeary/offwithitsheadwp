import DataActions  from 'flux/actions/DataActions.js'; 
import DataStore    from 'flux/stores/DataStore.js';
import { browserHistory } from 'react-router-dom';  
import { Link } from 'react-router-dom';  
import { withRouter } from 'react-router-dom';  

import AnimatedWrapper from "./animated_wrapper.js";
import * as Animated from "animated/lib/targets/react-dom";


class PostSingleComponent extends React.Component{

    constructor(props){
        super(props); 
        this.state = { 
            posts:[],
            animate: new Animated.Value(0)
        };
    }

    componentDidMount(){
      console.log('Single Post Component-ah!')   
    }


    render(){
        let location = this.props.location.pathname.split('/'); 
    
        let slug = location[2]; 
        let post = DataStore.getPostBySlug(slug);
    
        let cats = (post.cats) ? post.cats.map((cats, id) => {
            return (
            <li key={ id }>
                <Link to={`/category/${post.cats[id].slug}`}>{post.cats[id].name}</Link>    
            </li>
            )    
        }) : false;

        let tags = (post.tags) ? post.tags.map((tags, id) => {
            return (
            <li key={ id }>
                <Link to={`/tags/${post.tags[id].slug}`}>{post.tags[id].name}</Link>    
            </li>
            )    
        }) : false;

        const goBackStyle = {
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["-24px", "0px"]
			})},0,0)
			`,
			opacity: Animated.template`${this.state.animate}`
        };
        
        return(
            
            <div className="post-single">
                <div className="row">
                    <div className="container">
                        <h1>{post.title.rendered}</h1>
                        { cats &&
                        <div>
                            <h5>Categories:</h5>
                            <ul className="categories">{cats}</ul>
                        </div>
                        }
                        { tags &&
                        <div>
                            <h5>Tags: </h5>
                            <ul className="tags">{tags}</ul> 
                        </div>
                        }
                        
                        <br />
                        <Animated.span style={goBackStyle} className="goBack">
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    this.props.history.goBack();
                                }}
                            >
                                ←
                            </a>
                        </Animated.span>
                        <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                        <Link to={`/posts`}>Back to Post Index</Link>
                    </div>
                </div>
            </div>
        );
    }
}   
const PostSingle = AnimatedWrapper(PostSingleComponent); 
export default PostSingle; 
