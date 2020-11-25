const Post = require('../models/posts.model');

module.exports = {

    // get  
    getPosts: async (req, res, next) => {
        
        const posts = await Post.find();
        
        res.json({
            status: 200,
            success: true,
            message: "Post list from DB.",
            data: posts
        })
    },

    // post
    newPost: async (req, res, next) => {

        const newPost = new Post(req.body);
        const post = await newPost.save();

        res.json({
            status: 200,
            success: true,
            message: "Post saved in D successfullyB.",
            data: post
        })
        
    },

    // get (postId)
    getPostById: async (req, res, next) => {
        
        const { postId } = req.params;
        const post = await Post.findById(postId);
        if ( post != null) {
            res.json({
                status: 200,
                success: true,
                message: "Post by postId retrieved from DB.",
                data: post
            })
        } else {
            res.json({
                status: 200,
                success: false,
                message: "Post id does not exist DB.",
                data: null
            })
        }
        
    },

    // Put
    replacePost: async(req, res, next ) => {

        const { postId } = req.params;
        const newPost = req.body;
        await Post.findByIdAndUpdate(postId, newPost);
         
        res.json({
            status: 200,
            success: true,
            message: "Post replaced in DB.",
        })
    },

    // Patch
    updatePost: async(req, res, next ) => {

        const { postId } = req.params;
        const newPost = req.body;

        await Post.findByIdAndUpdate(postId, newPost, { new :true });
         
        res.json({
            status: 200,
            success: true,
            message: "Post updated in DB.",
        })
    },

    deletePost: async (req, res, next ) => {
        
        const { postId } = req.params;
        await Post.findByIdAndDelete(postId);

        res.json({
            status: 200,
            success: true,
            message: "Post deleted in DB.",
        })

    }
}