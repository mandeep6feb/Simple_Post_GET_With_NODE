let express = require('express')
const router = express.Router();
let Deatils = require('../models/details');
    router.post('detail', async (req, res) => {
        try {
            var about = new Deatils(req.body);
            var result = await about.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    });
    router.get('detail', async (req, res) => {
        try {
            var result = await Deatils.find().exec();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    });
module.exports = router;