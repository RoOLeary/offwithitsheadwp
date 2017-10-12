import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';

import TransitionGroup from "react-transition-group/TransitionGroup";

import Home                 from 'components/Home.js';
import About                from 'components/About.js';
import Page                 from 'components/Page.js';
import Post                 from 'components/Post.js';
import PostList             from 'components/PostList.js';
import PostSingle           from 'components/PostSingle.js';
import Contact              from 'components/Contact.js';
import Header               from 'components/Header.js';
import Footer               from 'components/Footer.js';
import NoMatch              from 'components/NoMatch.js';
import AnimatedSwitch       from "components/animated_switch";

import '../assets/css/App.min.css';

import { firstChild } from "../utils/helpers"; 

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact,
        'posts': Post,
    }

    
    buildRoutes(data){
        return data.pages.map((page, i) => {
            //console.log(i);
            return(
                <Route
                key={i}
                component={this.templates[page.slug]}
                path={`/${page.slug}`}
                exact
            /> 
            )
        })     
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header />
                        <div className="row">
                            <TransitionGroup component={firstChild}>
                                <Switch>
                                    <Route path="/" component={ Home } exact />
                                    <Route path="/about" component={ About } exact />
                                    <Route path="/goals" component={ Page } exact />
                                    <Route path="/contact" component={ Contact } exact />
                                    <Route path="/posts" component={ Post } exact />
                                    <Route path="/posts/:slug" component={ PostSingle } />
                                    <Route path="/:slug" component={ NoMatch } />
                                    {this.buildRoutes(response)}
                                    <Route render={() => { return <Redirect to="/" /> }} />
                                </Switch> 
                            </TransitionGroup>
                        
                         <Footer />
                        </div>
                    </div>
                </Router>

                , document.querySelector('#app')
            );
        });
    }
}

new AppInitializer().run();
