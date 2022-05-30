const Category = require('../models/Category');

exports.homepage = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find().limit(limitNumber);

        res.render('index', {
            title: 'Homepage - Recipe Blog',
            categories,
        });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};

// create category
exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        category.save();

        res.status(201).send({ success: true, message: 'Category created successfully!' });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};

// explore all categories
exports.exploreCategories = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find().limit(limitNumber);

        res.render('categories', {
            title: 'Categories - Recipe Blog',
            categories,
        });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};

// get single category details
exports.getSingle = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        // res.render('categories', {
        //     title: 'Category - Recipe Blog',
        // });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};
