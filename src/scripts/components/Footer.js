class Footer extends React.Component {
    render() {
        return (
            <footer id="fh5co-footer" role="contentinfo">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col-md-4 fh5co-widget">
                            <h4>RoACT</h4>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        </div>
                        <div className="col-md-2 col-md-push-1 fh5co-widget">
                            <h4>Links</h4>
                            <ul className="fh5co-footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 col-md-push-1 fh5co-widget">
                            <h4>Categories</h4>
                            <ul className="fh5co-footer-links">
                                <li><a href="#">Landing Page</a></li>
                                <li><a href="#">Real Estate</a></li>
                                <li><a href="#">Personal</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">e-Commerce</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-md-push-1 fh5co-widget">
                            <h4>Contact Information</h4>
                            <ul className="fh5co-footer-links">
                                <li>221b Street, Dublin, Ireland</li>
                                <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                                <li><a href="mailto:ronan@triggermovement.com">ronan@triggermovement.com</a></li>
                                <li><a href="https://ronan-oleary.com">Danger Ro</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="row copyright">
                        <div className="col-md-12 text-center">
                            <p>
                                <small className="block">&copy; 2017. Ro All Rights Reserved.</small> 
                                <small className="block">Designed by <a href="https://ronan-oleary.com" target="_blank">Ro</a> Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>
                            </p>
                            
                                <ul className="fh5co-social-icons">
                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                    <li><a href="#"><i className="icon-dribbble"></i></a></li>
                                </ul>
                            
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;