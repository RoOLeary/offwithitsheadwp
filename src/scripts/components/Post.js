import DataActions  from 'flux/actions/DataActions.js'; 
import DataStore    from 'flux/stores/DataStore.js'; 
import PostList from './PostList.js';

import AnimatedWrapper from "./animated_wrapper.js";

class PostComponent extends React.Component{
    constructor(props){
        super(props); 
        this.state = { posts:[]};
    }

    componentDidMount(){
        console.log('mounted'); 
    }

    render(){
        return(

            <div className="posts-index">
                <div className="row">
                    <div className="container">
                        <h1>Posts Page</h1> 
                    </div>
                </div>
                <PostList />


            </div>

        )

    }



}
const Post = AnimatedWrapper(PostComponent);
export default Post; 