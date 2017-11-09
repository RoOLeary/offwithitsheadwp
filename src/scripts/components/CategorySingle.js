import DataStore from 'flux/stores/DataStore.js'; 
import { browserHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 

import AnimatedWrapper from "./animated_wrapper.js";
import * as Animated from "animated/lib/targets/react-dom";

class CategorySingleComponent extends React.Component{


    componentDidMount(){
        console.log('I am on the Category Single Page...hear me roar!'); 
    }

    render() {

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


        return (

            <div className="all-posts">
                <div className="row">
                     <div className="container">
                        Category Single Page: 
                        <p>Cat Title to Go here</p>
                        <div>
                            <small>Category Items will go here</small>

                            <ul>
                                <li>Article 1</li>
                                <li>Article 2</li>
                            </ul>
                            <Link to={`/category`}>Back to Category List</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
const CategorySingle = AnimatedWrapper(CategorySingleComponent); 
export default CategorySingle;