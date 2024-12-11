import { Router } from "express"

const router = Router()

router.get ('/',(req,res) => {
    res.json("hola get")
})

router.post ('/',(req,res) => {
    res.json("hola post")
})

router.put ('/',(req,res) => {
    res.json("hola put")
})

router.patch ('/',(req,res) => {
    res.json("hola patch")
})

router.delete ('/',(req,res) => {
    res.json("hola delete")
})

export default router