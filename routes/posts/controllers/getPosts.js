const Post = require('./../../../models/Post');

const getPost = async (req,res) => {
    const { id } = req.params;
    try {
        const post = await Post.findOne({_id : id}).populate('author', 'name email');
        if(!post){
            return res.status(400).json({
                message : 'Post not found'
            });
        }

        res.status(200).json({
            post
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            message : 'Internal server error'
        });
    }
}

const getPosts = async (req,res) => {
    const posts = await Post.find().populate('author', 'name email');
    res.status(200).json({
        posts
    });
}

module.exports = { getPost, getPosts };