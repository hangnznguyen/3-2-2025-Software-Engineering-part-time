
const express = require('express')
const router = express.Router()







router.get("/home", (req, res) => {
    

    res.send('Hello world, welcome to our backend')
})

router.get("/contact", (req, res) => {
    console.log(req)
    res.send ("plaese contact 02111111")
})



router.get("/about", (req,res)=> {
    res.send("we are Academy school")
})



module.exports = router;






