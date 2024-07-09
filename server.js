const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
