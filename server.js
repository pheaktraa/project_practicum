import express, { response } from 'express'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

import {isUsernameExists, createUser, getUserById, getUserAndId, compareCredentials} from './database.js'
import {signInUser} from './auth.js'
import {userToken} from './authToken.js'

const app = express()

app.listen(3000)

app.set("view engine", 'ejs')

//Body-parsing middleware
//Acces to value that user type in the login/signup
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("public"))
app.use(cookieParser())

//Style

//Middleware
app.use((request, response, next) => {
    response.locals.errorMessage = []

    //verify the cookies (decoden the token)
    try {
        const decodeToken = jwt.verify(request.cookies.Celeste, process.env.SECRET_KEY)
        request.user = decodeToken
    } catch(error) {
        request.user = null
    }

    response.locals.user = request.user
    console.log(request.user)

    next()
})

//route handler
app.get("/", (request, response) => {
    if (request.user) {
        return response.render("dashboard", {user: request.user})
    }
    response.render("homepage")
})

app.get("/login", async (request, response) => {
    response.render("login")
})

app.get("/signup", async (request, response) => {
    response.render("signup")
})

app.get("/logout", async (request, response) => {
    response.clearCookie("Celeste")
    response.redirect("/")
})

app.get("/homepage", async (request, response) => {
    response.render("homepage")
})

app.post("/login", async (request, response) => {

    if (typeof request.body.username !== "string") 
        request.body.username = ""
    if (typeof request.body.password !== "string")
        request.body.password = ""

    if (request.body.username.trim() == "" && request.body.password == "" ) {
        return response.render("login", {errorMessage: ["Username / Password Invalid!!"]})
    }

    return compareCredentials(request.body.username.trim(), request.body.password).then((result) => { //Comapare password to database
        if(!result) {
            console.log("cred fail")
            return response.render("login", {errorMessage: ["Username / Password Invalid!!"]})
        }

        return getUserAndId(request.body.username.trim()) //get username and id to encode to the token
            .then(nameAndId => userToken(nameAndId))
            .then(token => {
                response.cookie("Celeste", token, {    //Give user cookies
                    httpOnly: true,
                    secure: true,
                    sameSite: "strict",
                    maxAge: 1000 * 60 * 60 * 24
                })

            response.redirect("/")
        })
    }) .catch(err => {
        console.error("login error:", err);
        return response.status(500).render("login", { errorMessage: ["Something went wrong."] });
    })
})

app.post("/signup", async (request, response) => {
    
    //The input "username/password" must be sting
    if (typeof request.body.username !== "string") 
        request.body.username = ""
    if (typeof request.body.password !== "string")
        request.body.password = ""
      
    signInUser(request.body.username.trim(), request.body.password).then(error => {
        if(error.length > 0)
            return response.render("signup", {errorMessage: [error]})   //Invalid Username or Password
            
        return isUsernameExists(request.body.username.trim()).then(isExist => {
            if (isExist)
                return response.render("signup",  {errorMessage: ["Username already exists."]}) //Username is already exist in the Database

            return createUser(request.body.username, request.body.password) //Create user in Database
                .then(rowId => userToken(getUserById(rowId)))
                .then(token => {
                response.cookie("Celeste", token), {    //Give user cookies
                    httpOnly: true,
                    secure: true,
                    sameSite: "strict",
                    maxAge: 1000 * 60 * 60 * 24
                }
                
                return response.redirect("/")
            })
        })
    }) .catch(err => {
        console.error("Signup error:", err);
        return response.status(500).render("signup", { errorMessage: ["Something went wrong."] });
    })

    // const rowId = await createUser(request.body.username, request.body.password)

    // // console.log(rowId)

    // const token = await userToken(await getLastUser(rowId))

    // // console.log(await getLastUser(rowId))

    // response.cookie("Celeste", await userToken(await getLastUser(rowId)), {
    //     httpOnly: true,
    //     secure: true,
    //     samesite: "strict",
    //     maxAge: 1000 * 60 * 60 * 24
    // })

})