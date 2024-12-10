const Post = require('../../../models/Post');
const User = require('../../../models/User');

const createPost = async (req, res) => {
    try {
        const user = await User.findById(req.body.author);

        if (!user) {
            res.status(404).json({ message: "user not found" });
        }

        const { title, description, category, author } = req.body;

        let media = [];
        if (req.files) {
            req.files.forEach(file => {
                media.push(file.path);
            });
        }

        let tags = req.body.title.split(' ');

        const post = new Post({
            title,
            media,
            description,
            category,
            author,
            tags
        });

        const savedPost = await post.save();
        res.status(201).json(savedPost);

        }catch (error) {
            res.status(500).json({ message: error.message });
        }


    }

module.exports = createPost;