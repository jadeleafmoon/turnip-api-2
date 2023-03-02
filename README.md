# Turnip API

Welcome to Turnip! It's an app to buy and sell used items.



<img src="./img/turnip-logo.png" alt="drawing" width="200px"/>



### What is Turnip?

Turnip is an app that allows you to buy and sell used items.

### What is this API?
This is a CRUD REST API for products bought and sold on the app Turnip. It connects to a PostgreSQL database via the Knex.js library. 



## Getting Started

Steps to using this API:
1. Clone this repo to your computer
2. Install and launch Postman
3. Create a local database on your computer called turnip_test with PSQL
4. Run localhost:3000 in Postman



Please create the following on your local root project folder:

- a .env.local file in the root directory. This will contain your db username, db password, and db name.
- a local PSQL databased name turnip_test



Initialize npm:

```
npm init -y
```



Use the following format to make HTTP requests:

```
GET localhost:3000/products/2
```





## Endpoints



### GET /products

This will get all products.

Request:
```
GET /api/products
```

Reponse:
```json
[
    {
        "id": 1,
        "name": "Ball",
        "price": 5
    },
    {
        "id": 2,
        "name": "Game",
        "price": 10.50
    },
    {
        "id": 3,
        "name": "Chocolate",
        "price": 15.99
    }
]
```



### GET /products/?limit=

A limit may also be specified. For example, the following Request will return the first two items.

Request:

```
GET /api/products/?limit=2
```

Response:

```json
[
    {
        "id": 1,
        "name": "Ball",
        "price": 5
    },
    {
        "id": 2,
        "name": "Game",
        "price": 10.50
    },
]
```



### GET /products/:id

This will get a product with the specified id.

Request:
```
GET /api/products/2
```

Reponse:

```json
[
    {
        "id": 2,
        "name": "Game",
        "price": 10.50
    }
]
```



### POST /products

Request:
```
POST /api/products/
```

Request Body:
```json
{
    "id": 4,
    "name": "Brush",
    "price": 99.99
}
```

Response:
```
The product Brush has been added.
```



### PATCH /products/:id

Request:
```
PATCH /api/products/4
```

Request Body:
```json
{
    "name": "Hairbrush",
    "price": 80.50
}
```

Response:
```
The product Brush with id 4 has been updated.
```



### DELETE /products/:id

Request:
```
DELETE /api/products/3
```

Response:
```
The product Chocolate has been deleted.
```



## The End

Thanks for visiting, and feel free to DM me with any questions or feedback!
