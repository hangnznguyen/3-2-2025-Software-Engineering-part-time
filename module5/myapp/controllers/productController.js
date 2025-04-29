const apiService = require('../libraries/apiService');

const getAllProducts = async (req, res) => {
    try {
        const products = await apiService.fetchProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await apiService.fetchProductById(id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};

module.exports = {
    getAllProducts,
    getProductById
};