import DataStore from 'flux/stores/DataStore.js'
import AnimatedWrapper from "./animated_wrapper.js";

class ContactComponent extends React.Component {

    componentDidMount(){
        console.log('contact component');
    }

    render() {
        
        let location = this.props.location.pathname.split('/'); 
        let slug = location[1];
        console.log(slug)
        let pageData = DataStore.getPageBySlug(slug);

        return (
            <div className="contact-page">
                <h1>{pageData.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
            </div>
        );
    }
}
const Contact = AnimatedWrapper(ContactComponent);
export default Contact;
