import DataStore from 'flux/stores/DataStore.js'
import AnimatedWrapper from "./animated_wrapper.js";
import Form from "./Form";

class ContactComponent extends React.Component {

    state = {
        fields: {}
    }; 

    onChange = updatedValue => {
       this.setState({ 
           fields: {
            ...this.state.fields,
            ...updatedValue
            }
        });
        console.log(this.state.fields);
    };


    componentDidMount(){
        console.log("contact component");
    }

    render() {
        
        let location = this.props.location.pathname.split('/'); 
        let slug = location[1];
        // console.log(slug)
        let pageData = DataStore.getPageBySlug(slug);

        return (
            <div className="contact-page">
                <div className="row">
                    <div className="container">
                        <h1>{pageData.title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
                        <Form onChange={fields => this.onChange(fields)} />
                        <p>
                            {JSON.stringify(this.state.fields, null, 2)}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
const Contact = AnimatedWrapper(ContactComponent);
export default Contact;
