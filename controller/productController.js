const Product = require("./../model/product");

exports.CreateProduct = async (req, res) => {
    try {

        const product = await Product.create({
            title: req.body.title,
            staffId: req.body.staffId,
            shortDes: req.body.shortDes,
            longDes: req.body.longDes,
            image: req.body.image,
            lunchedDate: req.body.lunchedDate 
        });

        res.status(200).json({
            status: "success",
            data: {
                product
            }
        })

    }
    catch(err) {
        res.status(400).json({
            status: "fail",
            message: err
        });   
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json({
            status: "success",
            data: {
                product
            }
        })
    }
    catch(err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
    res.status(200).json({
        status: "success",
        result: product.length,
        data: {
            product
        }
    });
    }
    catch(err) {
        res.status(401).json({
            status: "fail",
            message: err
        })
    }
}