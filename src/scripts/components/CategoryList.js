import DataStore from 'flux/stores/DataStore.js'; 
import { browserHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 

import AnimatedWrapper from "./animated_wrapper.js";
import * as Animated from "animated/lib/targets/react-dom";

class CategoryListComponent extends React.Component{


    componentDidMount(){
        console.log('category list component mounted'); 
    }
   
    render() {

        let categories = DataStore.getAllCats();
        console.log(categories);

        return (

            <div className="all-posts">
                <div className="row">
                     <div className="container">
                        Categories List: 
                        <ul>
                            <li>
                            <Link to={`/category/floop`}>Floop</Link>
                            </li>
                            <li>
                                <Link to={`/category/ronan`}>Ronan</Link>   
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }

}
const CategoryList = AnimatedWrapper(CategoryListComponent); 
export default CategoryList;