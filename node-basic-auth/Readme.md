# Basic server setup for authentication
Created with [Express Generator](https://expressjs.com/en/starter/generator.html) and [express-basic-auth](https://www.npmjs.com/package/express-basic-auth)

## Scripts

    npm run start
    yarn start

## About
After starting the server it will be live at `http://localhost:3000/`. 

All of the endpoints use `Basic Auth` - sending auth with axios: [Basic Auth Using the Axios HTTP Client](https://masteringjs.io/tutorials/axios/basic_auth) & [How to send Basic Auth with axios](https://stackoverflow.com/questions/44072750/how-to-send-basic-auth-with-axios).

## Authentication
Admin user
 - Username: admin
 - Password: admin

Normal user
 - Username: johnny
 - Password: johnny
 
## Endpoints

    /login - POST | needs Basic Auth
    /users - GET | needs Basic Auth

## More resources
You can find more open API's for testing and learning here - [Public APIs](https://github.com/public-apis/public-apis) & [AnyAPI](https://any-api.com/). [rickandmortyapi](https://rickandmortyapi.com/documentation/) is a good starting point - good documentation, clear schemes.
