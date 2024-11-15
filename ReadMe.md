# Nature Thank PVT LTD - REST API

## Overview
Nature Thank is a project that includes the following features:

### Packages
![bcrypt](https://img.shields.io/npm/v/bcrypt?label=bcrypt&color=blue)
![dotenv](https://img.shields.io/npm/v/dotenv?label=dotenv&color=blue)
![express](https://img.shields.io/npm/v/express?label=express&color=blue)
![jsonwebtoken](https://img.shields.io/npm/v/jsonwebtoken?label=jsonwebtoken&color=blue)
![mongoose](https://img.shields.io/npm/v/mongoose?label=mongoose&color=blue)
![nodemailer](https://img.shields.io/npm/v/nodemailer?label=nodemailer&color=blue)
![otp-generator](https://img.shields.io/npm/v/otp-generator?label=otp-generator&color=blue)
![cors](https://img.shields.io/npm/v/cors?label=cors&color=blue)

## Installation
1. Install Node.js on your computer.
2. Clone the Git repository on your local computer.
3. Run the following command to install dependencies:
    ```bash
    npm install
    ```
4. Set up `.env`:
    Set up your dotenv file and copy-paste the following:
    ```plaintext
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/userDB
    JWT_SECRET=@35fYTRgfgrEFre

    EMAIL_SERVICE=gmail
    EMAIL_PORT=587
    EMAIL_ADDRESS=chameerasandakelum69@gmail.com
    EMAIL_PASSWORD=kgcnurehfmhsmxcb

    HOST=http://localhost:4000
    ```
5. Run the project:
    ```bash
    npm run dev
    ```

## User Routes
### Basic User Routes
#### Get Users
```http
GET http://localhost:4000/api/users
```

#### Get Single User
```http
GET http://localhost:4000/api/user/{id}
```

#### Register a User
```http
POST http://localhost:4000/api/user/register
```
##### Request Body
```json
{
    "firstname": "chameera",
    "lastname": "Sandakelum",
    "email": "ict21018@std.uwu.ac.lk",
    "password": "Chami@1234"
}
```
##### Response
```json
{
    "message": "User created successfully",
    "user": {
        "firstname": "chameera",
        "profile_image": "default.jpg",
        "lastname": "Sandakelum",
        "email": "ict21018@std.uwu.ac.lk",
        "password": "$2b$10$rqmV.rKnHYfsM7/jNOSaeev94atLA6hf/pWKt01/u4Up.yE8ma0hq",
        "role": "user",
        "confirmed": false,
        "_id": "66ea51fca94599eccc1cb931",
        "__v": 0
    }
}
```

#### Log in as User
```http
POST http://localhost:4000/api/user/login
```
##### Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWE1MWZjYTk0NTk5ZWNjYzFjYjkzMSIsImlhdCI6MTcyNjYzMjc4MiwiZXhwIjoxNzI2NzE5MTgyfQ.XXN8d9KkcHOtXBK5Lnm626NXljbUn5sRrsgGwei3VhQ",
    "user": {
        "id": "66ea51fca94599eccc1cb931",
        "email": "ict21018@std.uwu.ac.lk",
        "confirmed": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWE1MWZjYTk0NTk5ZWNjYzFjYjkzMSIsImlhdCI6MTcyNjYzMjc4MiwiZXhwIjoxNzI2NzE5MTgyfQ.XXN8d9KkcHOtXBK5Lnm626NXljbUn5sRrsgGwei3VhQ"
    }
}
```

#### Verify a User
After you register as a user, you should confirm it. An email verification will be sent to your email.

Endpoint:
```http
GET http://localhost:4000/api/user/verify/:token
```
This will be automatically called by the API itself when you click confirm in the email verification.

#### Forget Password
Call this endpoint to get the resetting link to your email:
```http
POST http://localhost:4000/api/user/forgetpassword
```
##### Request Body
```json
{
    "email": "ict21018@std.uwu.ac.lk"
}
```
##### Response
```json
{
    "message": "Email sent"
}
```
Then you can reset your password via the provided link.

## Admin Routes
### Register Admin
```http
POST http://localhost:4000/api/user/admin/register
```
##### Request Body
```json
{
    "firstname": "chameera",
    "lastname": "sandakelum",
    "email": "ict21018@std.uwu.ac.lk",
    "password": "Chami@1234"
}
```
Once you register as an admin, a super admin should accept your admin request. It is sent to the email included in the `.env` file as follows:
```plaintext
EMAIL_ADDRESS=chameerasandakelum69@gmail.com
```

#### Resend the confirmation email

if you have get trouble to confirm you can resend confirmation email for your mail by  calling to this end point 

``` http
POST http://localhost:4000/api/user/resend
```

##### Request Body
``` json
{
    "email" : "Youremail@.com"
}
```


## Product Routes
### Add Product
```http
POST http://localhost:4000/api/products/add
```
##### Request Body
```json
{
    "title": "Sample Product",
    "price": 29.99,
    "description": "This is a sample product description.",
    "category": "Electronics",
    "stock": 100,
    "weight": 1.5,
    "sub_category": "Gadgets",
    "state": "solid",
    "images": [
        "path/to/image1.jpg",
        "path/to/image2.jpg"
    ]
}
```
> **Warning:** Authorization headers must be included for this endpoint.

### Get Product and Get All Products
#### Get a Specific Product
```http
GET http://localhost:4000/api/products/get
```

#### Get a all Products

```http
GET http://localhost:4000/api/products/get/{id}

```
#### Update a product

```http

PATCH http://localhost:4000/api/products/get/{id}

```

##### Request Body
```json
{
    "title": "Sample Product",
    "price": 29.99,
    "description": "This is a sample product description.",
    "category": "Electronics",
    "stock": 100,
    "weight": 1.5,
    "sub_category": "Gadgets",
    "state": "solid",
    "images": [
        "path/to/image1.jpg",
        "path/to/image2.jpg"
    ]
}
```
#### Delete a product

```http

DELETE http://localhost:4000/api/products/delete/{id}

```
## Cart Routes 

#### Add to cart 

```http

POST http://localhost:4000/api/cart/add

```
##### Request Body

```json

{
  "product": "Your product id",
  "user": "your user id ",
  "quantity": 3
}

```
#### get all carts 

```http

GET http://localhost:4000/api/cart/get

```

#### get Specific cart 

```http

GET http://localhost:4000/api/cart/get/{id}

```

#### update an item from the cart 

```http
PATCH http://localhost:4000/api/cart/delete/{id}

```

##### Request Body

```json

{
  
  "quantity": 3
}

```

for quantity please enter your quantity




 


