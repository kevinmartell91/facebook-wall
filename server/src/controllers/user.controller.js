const User = require('../models/users.model');
const Post = require('../models/posts.model');

module.exports = {

    // get
    getUsers: async (req, res, next) => {
        const users = await User.find();
        // throw new Error("Dummy errror");
        res.json({
            status: 200,
            success: true,
            message: "User list retrived from DB.",
            data:users
        })
    },
    // post
    newUser: async (req, res, next) => {

        const newUser = new User(req.body);
        const user = await newUser.save();

        res.json({
            status: 200,
            success: true,
            message: "User saved in DB successfully.",
            data: user
        })
        
    },
     // get (userId)
    getUserById: async (req, res, next) => {
        
        const { userId } = req.params;
        const user = await User.findById(userId).populate('posts');
        
        res.json({
            status: 200,
            success: true,
            message: "User by userId retrieved from DB.",
            data: user
        })
    },

    deleteUser: async (req, res, next ) => {
        
        const { userId } = req.params;
        await User.findByIdAndDelete(userId);

        res.json({
            status: 200,
            success: true,
            message: "userId deleted in DB.",
        })

    },

    getUserPosts: async(req,res ,next ) => {

        const { userId } = req.params;
        const user =  await User.findById(userId).populate('posts');
        
        res.json({
            status: 200,
            success: true,
            message: "Posts retrieved by UserId from DB.",
            data: user.posts
        })
    },

    newUserPost: async (req, res, next) => {

        const { userId } = req.params;
        const newPost = new Post(req.body);
        const user = await User.findById(userId);
        await newPost.save();
        user.posts.push(newPost);
        await user.save();

        res.json({
            status: 200,
            success: true,
            message: "User's post added to DB.",
            data: newPost
        })

    },

    updateUserPost: async (req, res, next) => {

        const { userId, postId } = req.params;
        const user = await User.findById(userId);
        const existPost = user.posts.filter( function(post) { return post._id == postId });
        
        if( existPost ){
            const updatedPost = req.body;
            const dbPost = await Post.findByIdAndUpdate(postId,updatedPost, {new: true});
            res.json({
                status: 200,
                success: true,
                message: "User's post updated to DB.",
                data: dbPost
            })
        } else {
            res.json({
                status: 200,
                success: true,
                message: "User's post fail.",
                data: null
            })
        }
    },

    deleteUserPost: async (req, res, next) => {

        const { userId, postId } = req.params;
        const user = await User.findById(userId);
        const existPost = user.posts.filter( function(post) { return post._id == postId });
        
        if( existPost ){
            await Post.findByIdAndDelete(postId);
            res.json({
                status: 200,
                success: true,
                message: "Post deleted.",
            });
        } else {
            res.json({
                status: 200,
                success: true,
                message: "User's post delete fail.",
            });
        }
    },

    



}