const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser =require('body-parser')
const cors = require('cors');

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extendent: true}))

app.get("/", (req, res)=>{
    res.send('bokkkby')
})

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "asa121asa",
    database: "database",
});

app.get('/test', (req, res) => {
    db.query('SELECT * FROM database.new_table;', (err, result) => {
        if (err) {
            console.error(err);
            res.send("throw error");
            return
        } else {
            res.send(result);
        }
    });
})


app.listen(3010, () => {
    console.log('running on port 3010')
});