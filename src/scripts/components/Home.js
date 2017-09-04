import DataStore from 'flux/stores/DataStore.js'
import AnimatedWrapper from "../../AnimatedWrapper";

class HomeComponent extends React.Component {

    componentWillMount(){
        console.log('I am in the home component');   
    }


    render() {
        let pageData = DataStore.getPageBySlug('frontpage');

        return (
            <div>
                <h2>Homepage template</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
               
            </div>
        );
    }
}
const Home = AnimatedWrapper(HomeComponent);
export default Home;
