import DataActions  from 'flux/actions/DataActions.js'; 
import DataStore    from 'flux/stores/DataStore.js'; 
import PostList from './PostList.js';

import AnimatedWrapper from "../../AnimatedWrapper";

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
                <h1>{this.props.title}</h1>
                Post List will go here.
                <PostList />


            </div>

        )

    }



}
const Post = AnimatedWrapper(PostComponent);
export default Post; 