# Blog Analytics and Search API

This Express.js API provides two main functionalities: fetching blog analytics and searching for blogs based on a query.

## Endpoints

### Fetch Data Endpoint
- `GET /api/fetch-data`: Retrieve analytics and data about the blogs from an external source.

### Blog Search Endpoint
- `GET /api/search-data?query=<your_query>`: Search for blogs based on the provided query string. Replace `<your_query>` with the desired search term. Example query = privacy

## Features

- **Fetch Data**: Fetch data about the blogs including the total number of blogs, the blog with the longest title, the number of blogs with the word "privacy" in their titles, and a list of unique blog titles.

- **Search Blogs**: Search for blogs based on a query. The search is case-insensitive and supports partial matches, allowing you to find blogs with titles or image URLs that contain the specified query.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/codingXpert/sub-space-assignment-dataAnalysis-

## Install the required dependencies
```
npm install
```
   
## Start the Express.js server

```
node index.js
```

## PORT

> Run the application on the port 8000

## Use the API to fetch analytics and search for blogs.

* To fetch blog analytics, make a GET request to /api/fetch-data.

* To search for blogs based on a query, make a GET request to /api/search-data?query=privacy.

### Technologies Used

* Express.js
* Axios
* Lodash

### Author
[Vivek Raj]
