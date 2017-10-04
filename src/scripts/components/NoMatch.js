import AnimatedWrapper from "./animated_wrapper.js";

class NotFoundComponent extends React.Component {
    render() {


        return (
            <div className="404">
            
                 <div className="row">
                     <div className="container">
                            <h1>404 - Nothing Found</h1>
                            <p>Nada here mate, look somewhere else</p>
                        </div>
                </div>
            </div>
        );
    }
}
const  NoMatch = AnimatedWrapper(NotFoundComponent); 
export default NoMatch;
