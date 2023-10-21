const axios = require('axios');
const express = require('express');
const _ = require("lodash"); 
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
            const blogs = response.data.blogs;
            const totalBlogs = _.size(blogs);
            const longestTitle = _.maxBy(blogs, (blog) => blog.title.length);
            const blogsWithPrivacy = _.filter(blogs, blog => _.includes(blog.title.toLowerCase(), 'privacy'));
            // const blogsWithPrivacy = blogs.filter(blog => blog.title.toLowerCase().includes('privacy'));
            const uniqueBlogsTitle = Array.from(new Set(blogs.map(blog => blog.title)));
            
            return res.send({
                status: 'success',
                uniqueBlogsTitle,
                blogsWithPrivacy,
                totalBlogs,
                longestTitle,
                blogs,
            });
        }
    } catch (error) {
        console.log('Error', error.message);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}