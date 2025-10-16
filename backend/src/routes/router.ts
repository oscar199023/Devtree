import { Router } from 'express'
import { body } from 'express-validator'
import { crateAccount, getUser, login } from '../handlers'
import { handleInputErrors } from '../middleware/validation'

const  router = Router()

/** Autenticacion y Registro*/
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El Handle de usuario es obligatorio'),

    body('name')
        .notEmpty()
        .withMessage('El nombre de usuario es obligatorio'),

    body('email')
        .isEmail()
        .withMessage('El email de usuario no es valido'),

    body('password')
        .isLength({ min: 6 })
        .withMessage('El password minimo es de 6 caracteres'),

    handleInputErrors,

    crateAccount)

router.post('/auth/login',

    body('email')
        .isEmail()
        .withMessage('El email de usuario no es valido'),

    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio'),

    handleInputErrors,
    login
)

router.get('/user', getUser)

export default router