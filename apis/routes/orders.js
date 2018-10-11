const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'this is get Order request'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'this is post Order request'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === 'special') {

        res.status(200).json({
            message: 'your Order Special Id',
            id:id
        });
    }
    else{
        res.status(200).json({
            message: 'your Order  Id'
        });
    }
});

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Update Order'
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Delete Order'
    });
});
module.exports = router;