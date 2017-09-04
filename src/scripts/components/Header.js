import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <section className="container-fluid">
                <div className="header">
                    <Link to="/" style={{marginRight: '10px'}} >Home</Link>

                    {allPages.map((page) => {
                        if(page.slug != 'frontpage'){
                        return(
                                <Link 
                                    key={page.id} 
                                    to={`/${page.slug}`} 
                                    style={{marginRight: '10px'}}
                                >
                                    {page.title.rendered}
                                </Link>
                            )                     
                    }
                    })}
                </div>
            </section>
        );
    }
}

export default Header;