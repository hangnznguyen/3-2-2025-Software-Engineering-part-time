const axios = require('axios');

const BASE_URL = 'https://fakestoreapi.com';

const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
};

const fetchProductById = async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
};

module.exports = {
    fetchProducts,
    fetchProductById
};