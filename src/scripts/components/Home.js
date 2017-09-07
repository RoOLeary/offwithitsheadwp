import DataStore from 'flux/stores/DataStore.js'
import AnimatedWrapper from "./animated_wrapper.js";

class HomeComponent extends React.Component {

    componentWillMount(){
        console.log('I am in the home component');   
    }

    render() {
        let pageData = DataStore.getPageBySlug('home');

        return (
            <div className="home-page">
                <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-4 text-center">
                                <div className="display-t js-fullheight">
                                    <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                        <h1>{pageData.title.rendered}</h1>
                                        {/* <small>I'm being output from the component</small> */}
                                        <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
                                        <p><a className="btn btn-primary btn-lg btn-demo" href="/shush">View Demo</a> <a className="btn btn-primary btn-lg btn-learn">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="fh5co-features">
                    <div className="container">
                        <div className="services-padding">
                            <div className="row">
                                <div className="col-md-4 animate-box">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-hotairballoon"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Marketing</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                            <p><a href="#">Learn More <i className="icon-arrow-right22"></i></a></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 animate-box">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-search"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Search Engine</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                            <p><a href="#">Learn More <i className="icon-arrow-right22"></i></a></p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 animate-box">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-wallet"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Earn Money</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                            <p><a href="#">Learn More <i className="icon-arrow-right22"></i></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-4 animate-box">

                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-wine"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Entrepreneur</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                            <p><a href="#">Learn More <i className="icon-arrow-right22"></i></a></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-4 animate-box">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-genius"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Stragic Plan</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                            <p><a href="#">Learn More <i className="icon-arrow-right22"></i></a></p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 animate-box">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className="icon-chat"></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>Support</h3>
                                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                                            <p><a href="#">Learn More <i className="icon-arrow-right22"></i></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fh5co-wireframe">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>Wireframe Connects the Underlying Conceptual Structure</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 animate-box">
                                <div className="user-frame">
                                    <h3>Wireframe Connects the Underlying Conceptual Structure</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                    <span>Louie Jie Mahusay</span><br />
                                    <small>CEO, Founder</small>
                                </div>
                            </div>
                            <div className="col-md-7 animate-box">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                <blockquote>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                </blockquote>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const Home = AnimatedWrapper(HomeComponent);
export default Home;
