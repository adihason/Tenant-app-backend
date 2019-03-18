const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); //TODO: not in use... why did you require it?
const Tanents = require('../database/models/tenantsModel'); //TODO: Export via models/index.js
const checkAuth = require('../middleware/checkAuth'); //TODO: not in use... why did you require it?

router.use(bodyParser.json());

router.get('/', (req, res) => {
    Tanents.find((err, tenants) => {
        if (err) {
            return console.error(err); //TODO: console.error is void. what is the point of returning it here? What about sending a response back to the client?
        }
        res.json(tenants);
    });

});

router.post('/', (req, res) => {
    const { name, phoneNumber, address, debts } = req.body;
    const tenant = new Tanents({
        name,
        phoneNumber,
        address,
        debts
    });
    tenant.save((err, tenant) => {
        if (err) {
            return console.error(err);
        }
        return res.json({
            message: "success",
        });
    });
});

router.delete('/:tenantId', (req, res) => {
    Tanents.findByIdAndRemove(req.params.tenantId, (err, tenants) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.json("success"); // TODO: return is useless here
    });
});

router.put('/:tenantId', (req, res) => {
    Tanents.findByIdAndUpdate(req.params.tenantId, req.body, { new: true }, (err, tenant) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.json("success");
    });
});

module.exports = router;
