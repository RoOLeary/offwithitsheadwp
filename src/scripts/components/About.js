import DataStore from 'flux/stores/DataStore.js'
import AnimatedWrapper from "./animated_wrapper.js";

class AboutComponent extends React.Component {

    componentDidMount(){
        console.log('about component'); 
    }


    render() {

        let slug = 'about';
        let pageData = DataStore.getPageBySlug(slug);

        return (
            <div className="about-page">
               
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
const About = AnimatedWrapper(AboutComponent);
export default About;
