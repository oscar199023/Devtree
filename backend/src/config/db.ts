import mongoose from "mongoose"
import colors from 'colors'


export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.cyan(`Base de datos conectada en ${url}`))
    } catch (error) {
        console.log(colors.bgRed.black.bold(error.message))
        process.exit(1) // Termina el proceso si no se puede conectar
    }
}