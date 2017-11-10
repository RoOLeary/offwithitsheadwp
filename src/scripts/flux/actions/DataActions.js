import axios from 'axios';
import alt   from 'flux/alt/alt.js';

class DataActions {

    constructor() {
        const appUrl = 'http://vagrantpress.dev'; // Wordpress installation url

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
        this.categoriesEndPoint  = `${appUrl}/wp-json/wp/v2/categories`; // Endpoint for getting Categories
        //this.menusEndPoint = `${appUrl}/wp-json/wp-api-menus/v2/menus/`; // Endpoint for getting Wordpress Menus

    }

    // Method for getting data from the provided end point url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
                console.log(response.data);
            }).catch((error) => {
                reject(error);
            }); 
        });     
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            //pass this along to the next method
            this.getCategories(response, cb)
        });
        return true;
    }

    // Method for getCategories
    // accepts the pages object from getPages, mashes these fella's together
	getCategories(pages, cb){
	    this.api(this.categoriesEndPoint).then((response)=>{
            const categories 	= response
            const pagesAndcats 	= { pages, categories };
            // rightio, send this on to the getPosts method
            this.getPosts(pagesAndcats, cb)
	   	});		
        return true; 
	}

    // Method for getting Posts data
    getPosts(pagesAndcats, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const postsObj 	= {posts: response}
            // ready the payload add the postsObj and then away we go!
	    	const payload 	= Object.assign(pagesAndcats, postsObj);
            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }

    // This returns an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);