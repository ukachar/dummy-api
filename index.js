require('dotenv').config();
const express = require('express')
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors())

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})


app.get('/get', async (req, res) => {
    fs.readFile('dummyData.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error reading file:", err);
            return res.status(500).send('Error reading file');
        }
        try {
            const data = JSON.parse(jsonString);
            res.send(data);
        } catch (err) {
            console.log('Error parsing JSON string:', err);
            res.status(500).send('Error parsing JSON');
        }
    });
});
