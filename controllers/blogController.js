const axios = require('axios');
const express = require('express');
const app = express();

//API to fetch the data

module.exports.fetchData = async (req, res) => {
    try {
        const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
            headers: { 'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'}
        });
        if (!response) {
            return res.send({ message: 'No data is available' });
        } else {
            const blogs = response.data;
            return res.send({
                status: 'success',
                data: blogs
            });
        }
    } catch (error) {
        console.log('Error', error.message);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}