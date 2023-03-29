const express = require('express');
const router = new express.Router();
const Job = require('./Model/rdp_model')
const app = express();


router.post('/createjob', (req, res) => {
    const job = new Job(req.body);
    job.save().then((job) => {
        res.status(201).send(job);
    }).catch((error) => {
        res.status(400).send(error);
    })
})



module.exports = router;