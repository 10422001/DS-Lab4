const express = require('express');
const node_api = express();

const {pool_new} = require("./database_imports");
node_api.get('/:val', (req, res) => {
    const val = req.params.val
        // pool.query('SELECT * FROM products', [val], (error, results) => {
    pool_new.query('SELECT * FROM products WHERE id = $1', [val], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    });

const port = 8888
node_api.listen(port, () => {
    console.log('Server is running on port: ' + port);
});