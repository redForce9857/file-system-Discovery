import  express from  'express';
const app = express();
const PORT = 3000;
import  mongoose  from 'mongoose';
import * as dotenv from 'dotenv'
import {router} from "./routers/routs.js";
dotenv.config();

app.use(express.json())
app.use('/api',router)
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

async function Start(){
    try{
        await  mongoose.connect(process.env.DB_CONFIG, {useNewUrlParser: true},() =>
            console.log('connected to to Mongoose')
        );
        app.listen(PORT, () =>{
            console.log(`we are listening ${PORT}`)
        })
    }catch (e) {
        console.log(e)
    }
}


Start();