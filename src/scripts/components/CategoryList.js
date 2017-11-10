
import DataStore from 'flux/stores/DataStore.js'; 
import { browserHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 

import AnimatedWrapper from "./animated_wrapper.js";
import * as Animated from "animated/lib/targets/react-dom";

class CategoryListComponent extends React.Component{

    componentDidMount(){
  
          console.log('category list component mounted'); 
        
    }
   
    render(){

        let cats = DataStore.getAllCategories();
        

        return (

            <div className="all-posts">
                <div className="row">
                     <div className="container">
                        <ul>
                        {cats.map((cat, i) =>
                            
                        <li key={ cat.id }>
                            <h3><Link to={`/category/${cat.slug}`}>{cat.name}</Link></h3>
                            
                        </li>
                        
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
const CategoryList = AnimatedWrapper(CategoryListComponent); 
export default CategoryList;