# Nature Thank PVT LTD - REST API 

## overview 
Nature thank is a project that with following things 

# installation
1. install node js on your computer 
2. clone the git repo on your local computer 
3. run follwing command to install dependancies 
```bash
$ npm install
```
4. setup .env
   setup your dotenv file and copy paste as follows 
```
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/userDB
    JWT_SECRET=@35fYTRgfgrEFre

    EMAIL_SERVICE=gmail
    EMAIL_PORT=587
    EMAIL_ADDRESS=chameerasandakelum69@gmail.com
    EMAIL_PASSWORD=kgcnurehfmhsmxcb

    HOST=http://localhost:4000

```

5. run project 
    $ npm run dev 


## User Routes 
### Basic user Routes 
#### Get Users
```
http://localhost:4000/api/users
```
### Get single user 
```
http://localhost:4000/api/user/{id}
```

### Register a User 

```
http://localhost:4000/api/user/register

```
#### your body should have as follow 

```json
{
    "firstname": "chameera",
    "lastname": "Sandakelum",
    "email": "ict21018@std.uwu.ac.lk",
    "password": "Chami@1234"
}

```

#### Resposnse 
```json
    {
    "message": "User created successfully",
    "user": {
        "firstname": "chameera",
        "profile_iamge": "default.jpg",
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

### Log in as user 

```
localhost:4000/api/user/login
```

#### Response 

``` json
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

### Verify a user 

after you register as a user you should confirm it.
Email verification will send to your email

In here end point may be 

```
localhost:4000/api/user/verify/:token
```

this will automatically call by the API itself when you click confirm in the email verification 


### forget password 

call to here and you can get the resetting link to your email
```
localhost:4000/api/user/forgetpassword
```

#### Request body 

```json
{
    "email" : "ict21018@std.uwu.ac.lk"
}
```

#### Response 
```json
{
    "message": "Email sent"
}
```

then you can reset your password via loading pages 

