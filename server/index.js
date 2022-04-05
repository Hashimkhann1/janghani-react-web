import express from  'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/route.js'
import Connection from './database/db.js'

const app = express()

app.use(cors())

app.use(bodyParser.json({limit : '30mb' , extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb' , extended : true}))

app.use(router)

const PORT = 5000;

app.listen(PORT , () => console.log('server is running on PORT : ' , PORT))

Connection()


