import DataStore from 'flux/stores/DataStore.js'
import AnimatedWrapper from "./animated_wrapper.js";

class PageComponent extends React.Component {
    render() {

        let location = this.props.location.pathname.split('/'); 
        let slug = location[1];
        //console.log('general-page')
        let pageData = DataStore.getPageBySlug(slug);

        return (
            <div className="page">
            
                 <div className="row">
                     <div className="container">
                            <h1>{pageData.title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
                        </div>
                </div>
            </div>
        );
    }
}
const Page = AnimatedWrapper(PageComponent); 
export default Page;
