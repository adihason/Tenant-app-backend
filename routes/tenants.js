const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Tanents = require('../database/models/tenantsModel');
const checkAuth = require('../middleware/checkAuth');

router.use(bodyParser.json());

router.get('/', (req, res) => {
    Tanents.find((err, tenants) => {
        if (err) {
            return console.error(err);
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
        return res.json("success");
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
