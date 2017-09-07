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
      console.log('Single Post Component')   
    }


    render(){
        let location = this.props.location.pathname.split('/'); 
        console.log(location); 
        let slug = location[2]; 
        let post = DataStore.getPostBySlug(slug);
        
        let catid = post.categories[0];
        console.log(catid)

        let cats = post.categories.map((cat, id) => {
            return (
            <p key={ id }>Category: {cat} - {catid} - {id}: {post.categories[id].name}</p>
            )    
        });

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
                        <small>{cats}</small> 
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
