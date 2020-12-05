const License = require('./../model/license');

exports.createLicense = async (req, res) => {
    try {
        const license = await License.create({
            staffId: req.body.staffId,
            amount: req.body.amount,
            duration: req.body.duration,
        });
    
        res.status(200).json({
            status: "success",
            data: {
                license
            }
        })
    }
    catch(err){
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
    
}