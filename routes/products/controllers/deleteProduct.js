const Product = require('./../../../models/Products');

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete({ _id: id });

        if (!product) {
            res.status(404).json({
                error: "No matched product found"
            });
        }

        res.status(200).json({
            error: "Product has been deleted successfully!"
        })
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

module.exports = deleteProduct;