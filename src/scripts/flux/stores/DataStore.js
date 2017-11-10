import alt          from 'flux/alt/alt.js';
import DataActions  from 'flux/actions/DataActions.js';

class DataStore {
    constructor() {
        this.data = {};
        
        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:             this.getAll,
            getAllPages:        this.getAllPages,
            getAllPosts:        this.getAllPosts,
            getAllCategories:   this.getAllCategories,
            getPageBySlug:      this.getPageBySlug,
            getPostBySlug:      this.getPostBySlug
        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() { 
        return this.getState().data; 
    }

    // Returns all Pages
    getAllPages() { 
        return this.getState().data.pages; 
    }

    // Returns all Posts
    getAllPosts() { 
        return this.getState().data.posts; 
    }

     // Returns all Categories
    getAllCategories() {
        console.log("from the store...");
        return this.getState().data.categories;   
    }


    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    // Returns a Page by provided slug
    getPostBySlug(slug){
        const posts = this.getState().data.posts;
        return posts[Object.keys(posts).find((post, i) => {
            return posts[post].slug === slug;
        })] || {};
    }

    // New method for getting a category by slug. 
    // TODO: Hook this brotha up! :)
    // Should hopefully work for terms and taxonomies too. 
    
    getCategoriesBySlug(slug){
        const cats = this.getState().data.categories;
        return cats[Object.keys(cats).find((cat, i) => {
            return cats[cat].slug === slug;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');