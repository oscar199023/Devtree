import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from "../models/User"
import { checkPassword, hashPassword } from '../utils/auth'
import { generateJWT } from '../utils/jwt'

export const crateAccount = async (req: Request, res: Response) => {



    const { email, password } = req.body

    const userExists = await User.findOne({email})

    console.log(userExists)
    if (userExists) {
        const error = new Error('El usuario ya existe con ese mail ya existe')
        return res.status(409).json({ error: error.message })
    }

    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne({ handle})
    if (handleExists) {
        const error = new Error('Nombre de usuario no disponible')
        return res.status(409).json({ error: error.message })
    }

    const user = new User (req.body)
    user.password = await hashPassword(password)
    user.handle = handle

    console.log(slug(handle))
    await user.save()

    res.status(201).send('Registro exitoso')
}

export const login = async (req: Request, res: Response) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })

    }

    const { email, password } = req.body
    //comprobar si el usuario existe
    const user = await User.findOne({email})
    if (!user) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({ error: error.message })
    }
    //comprobar si el password es correcto

    const isPasswordCorrect = await checkPassword(password, user.password)
    if (!isPasswordCorrect) {
        const error = new Error('El Password es incorrecto')
        return res.status(401).json({ error: error.message })
    }

    const token = generateJWT({id: user._id})

    res.send(token)
}