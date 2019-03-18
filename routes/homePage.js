const express = require("express");
const router = express.Router();
const path = require("path");

//TODO: Useless router
router.get('/', (req,res) => {
    // TODO: You do not have an index.html file in the directory. Also, you should not have public frontend content on the root of your backend project
    res.sendfile(path.join(__dirname, '/index.html'));
});

module.exports = router;
