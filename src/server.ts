import express from 'express'
import router from './router'
import colors from 'colors'
import db from './config/db'

//conect DB
async function conectDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log(colors.bold.green('exito'))
    }catch(error){
        console.log(error)
        console.log(colors.bgRed.white('hubo un error'))
    }
    
}
conectDB()

//instancia de express

const server = express()

//leer datos de form
server.use(express.json())

server.use('/api/productos', router)

export default server