const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'this is get request'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'this is post request'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'this is post request'
    });
});


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {

        res.status(200).json({
            message: 'you have Special Id',
            id:id
        });
    }
    else{
        res.status(200).json({
            message: 'this is other Id'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'this is Update'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'this is Delete'
    });
});
module.exports = router;