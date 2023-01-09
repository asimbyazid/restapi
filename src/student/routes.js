const {Router} = require('express');
const controller = require('./controller')
const router = Router();


router.get("/",controller.getStudentsController);
router.post("/",controller.addStudentsController)
router.get("/:id",controller.getStudentsControllerById);


module.exports = router;