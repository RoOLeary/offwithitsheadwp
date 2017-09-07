import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <section className="container">
                <nav className="fh5co-nav" role="navigation">
                    <div className="top-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-2">
                                    <div id="fh5co-logo">
                                        <Link to="/" key="home">RoACT</Link></div>
                                    </div>
                                <div className="col-xs-10 text-right menu-1">
                                    <ul>
                                    <Link to="/" style={{marginRight: '10px'}} >Home</Link>
                                    
                                        {allPages.map((page, i) => {
                                            if(page.slug != 'frontpage'){
                                            return(
                                                    <li key={i}><Link 
                                                        
                                                        to={`/${page.slug}`} 
                                                        style={{marginRight: '10px'}}
                                                    >
                                                        {page.title.rendered}
                                                    </Link></li>
                                                )                     
                                            }
                                            
                                        })}
                                    </ul>    
                                </div>
                            </div>  
                        </div>
                    </div>    
                </nav>
            </section>
        );
    }
}

export default Header;