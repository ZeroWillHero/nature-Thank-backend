const Product = require('./../../../models/Products');

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        let updates = req.body;

        if (req.files) {
            try {
                const images = req.files.map(file => file.path);
                updates = { ...updates, images };

            } catch (error) {
                return res.status(500).send({ error });
            }
        }

        const product = await Product.findByIdAndUpdate(id, updates, { new: true });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ product });


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = updateProduct;
