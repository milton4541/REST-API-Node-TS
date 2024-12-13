import { Router } from "express"
import { createProduct, deleteProduct, getProduct, getProductById, updateAvailability, updateProduct } from "./handlers/product"
import {body, param} from 'express-validator'
import { handleInputErrors } from "./middleware"

const router = Router()

router.get ('/',getProduct)
router.get ('/:id',
    param('id').isInt().withMessage('Id no valido'),
    handleInputErrors,
    getProductById)

router.post ('/',
        //validacion
        body('name')
            .notEmpty().withMessage('el nombre no puede ir vacio'),

        body('price')
            .isNumeric().withMessage('Valor no valido')
            .notEmpty().withMessage('el precio no puede ir vacio')
            .custom(value => value > 0).withMessage('Precio no valido'),
        handleInputErrors,
        createProduct)

router.put ('/:id', updateProduct)

router.patch ('/:id',updateAvailability)

router.delete ('/',deleteProduct)

export default router