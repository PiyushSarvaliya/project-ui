const {Router} = require("express")
const product = require("../modals/modal")
const router = Router()

router.get("/ui" , (req , res) =>{
    res.render("ui")
})
router.get("/data" , async(req , res)=>{
    let data = await product.find()
    res.json(data)
})

router.post("/create" , async(req , res) =>{
    let data = await product.create(req.body)
    res.json(data)
})
router.delete("/delete/:id", async(req , res)=>{
    let {id} = req.params
    
    let data = await product.findByIdAndDelete(id)
    res.send(data)
})

module.exports = router