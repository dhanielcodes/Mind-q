let express = require('express')
/* let path = require('path') */
let bodyParser = require('body-parser')
let app = express()
let Pusher = require('pusher')
let crypto = require('crypto')

let pusher = new Pusher({
    appId : "1080348",
    key : "22392ad93aa4fd27af7f",
    secret : "f66dc9f4b6ec26452034",
    cluster : "eu"
    
})

//BODY PARSER MIDDLEWARE

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((/* req */res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*')

    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUSH, PATCH, DELETE')

    res.setHeader("Access-Control-Allow-Headers", 'X-Requested-With, content-type')

    res.setHeader("Access-Control-Allow-Credentials", true)
    next()
})

app.get('/', (res, /* req */) => {
    res.send('welcome')
})

app.post('/pusher/auth', (req, res) => {
    let socketId = req.body.socket_id
    let channel = req.body.channel_name

    let presenceData = {
        user_id: crypto.randomBytes(16).toString('hex')
    }
    let auth = pusher.authenticate(socketId, channel, presenceData)
    res.send(auth)
})



app.set('port', (5000))

app.listen(app.get('port'), () => {
    console.log('App started', app.get('port'))
})

