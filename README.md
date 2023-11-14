# NodePop

# NodePop

[Demo](http://127.0.0.1:3000/) of the methods (this link works only if you run the project)


## Deploy

### Install dependencies

    npm install

### Configure

Review lib/connectMongoose.js to set database configuration

### Init database

    node initDBinit-db.js

## Start

To start in development mode:

    npm run dev

## API

### GET /anuncios

**Input Query**:

start: {int} skip records
limit: {int} limit to records
sort: {string} field name to sort by
tag: {string} tag name to filter
precio: {range} filter by price range

**Result:**

    {
        "anuncios": [
        {
        
            "nombre": "Iphone 14 Pro",
            "venta": true,
            "precio": 5000,
            "foto": "http://localhost:3000/public/foto-1699810991517.png",
            "tags": [
            "lifestyle",
            "mobile"
            ]
  
        },
        ]
    }


