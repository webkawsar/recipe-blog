const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Category name is required'],
            lowercase: true,
            trim: true,
        },
        image: {
            type: String,
            required: [true, 'Category image is required'],
            trim: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
