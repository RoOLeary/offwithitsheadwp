import DataStore from 'flux/stores/DataStore.js'
import AnimatedWrapper from "./animated_wrapper.js";

class HomeComponent extends React.Component {

    componentWillMount(){
        console.log('I am in the home component');   
    }

    render() {
        let pageData = DataStore.getPageBySlug('frontpage');

        return (
            <div className="home-page">
                <h1>{pageData.title.rendered}</h1>
                <small>I'm being output from the component</small>
                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
            </div>
        );
    }
}
const Home = AnimatedWrapper(HomeComponent);
export default Home;
