
// All Imports
const express = require('express');
const router = express.Router();
const { Product } = require('../schemas/products');
const { validateProduct } = require('../functions/validate');
const { uploadImage } = require('../functions/image');
const { fileFilter } = require('../functions/fileFilter');
const multer = require('multer');


// =======================================================>
// Get All needed products ( GET )
// =======================================================>

router.get('/', async (req, res) => {

    try {

        // get products
        const products = await Product.find();

        // get and structure needed products
        const formattedProducts = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                images: product.images[0]
            };
        });

        // send product
        res.send(formattedProducts);

    } catch (error) {

        // handle error
        res.status(500).json({ error: 'Failed to retrieve products' });

    }

})

// =======================================================>
// Get Single needed products ( GET SINGLE )
// =======================================================>

router.get('/single', async (req, res) => {

    try {

        // get single Product Id from query
        const { singleId } = req.query

        // Check validation of Single Product
        const product = await Product.findById(singleId)
        if (!product) return res.status(404).send("Invatid Product ID. There is no such product ID")

        // Find Product by ID
        const singleProduct = await Product.findById(singleId)

        // Send found product
        res.status(200).send(singleProduct)

    } catch (error) {

        // handle error
        res.status(500).json({ error: 'There is a problem' });

    }

})

// Configure Multer =================>

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// =======================================================>
// Post Single product ( POST )
// =======================================================>

router.post('/upload', upload.array('images'), async (req, res) => {

    try {

        // Image Validation Error
        if (req.fileValidationError) {
            return res.status(400).json({ error: req.fileValidationError });
        }

        // check validation of product
        const { error } = validateProduct(req.body);
        if (error) {
            return res.send(error.details[0].message);
        }

        // upload image logic (funcition)
        const imageUrls = await uploadImage(req.files, res);

        // new Product
        const { name, category, price, company, desc, size } = req.body;
        const product = new Product({
            company,
            name,
            category,
            price,
            desc,
            size,
            images: imageUrls
        });

        // save and send product
        const savedProduct = await product.save();
        res.status(200).send(savedProduct);

    } catch (error) {

        // handle error
        res.status(500).json({ error: 'There is a problem' });
        console.log(error)

    }

});

// =======================================================>
// Edit Single Product ( PUT )
// =======================================================>

router.put('/edit', upload.array('images'), async (req, res) => {

    try {

        // get id from query
        const { id } = req.query;

        // check validation of product
        const { error } = validateProduct(req.body);
        if (error) {
            return res.send(error.details[0].message);
        }

        // upload image logic (function)
        const imageUrls = await uploadImage(req.files, res);

        // check id of product (is it valid or not ?)
        const productId = await Product.findById(id);
        if (!productId) {
            return res.status(404).send("Product ID is not found");
        }

        // find id of product and update
        const product = await Product.findByIdAndUpdate(id, {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            desc: req.body.desc,
            size: req.body.size,
            images: imageUrls
        }, { new: true });

        // save product and send
        product.save();
        res.send(product)

    } catch (error) {

        // handle error
        res.status(500).json({ error: 'There is a problem' });

    }

});

// =======================================================>
// Delete Single Product ( DELETE )
// =======================================================>

router.delete('/delete', async (req, res) => {

    try {

        const { deleteId } = req.query

        // check id of product (is it valid or not ?)
        const productId = await Product.findById(deleteId);
        if (!productId) {
            return res.status(404).send("Product ID is not found");
        }

        const product = await Product.findOneAndDelete(deleteId)

        res.status(200).send(product)

    } catch (error) {

        // handle error
        res.status(500).json({ error: 'There is a problem' });

    }

})

module.exports = router; 