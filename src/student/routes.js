const {Router} = require('express');
const controller = require('./controller')
const router = Router();


router.get("/",controller.getStudentsController);
router.post("/",controller.addStudentsController)
router.get("/:id",controller.getStudentsControllerById);
router.delete("/:id",controller.deleteStudentsControllerById);
router.put("/:id",controller.updateStudentsControllerById);

module.exports = router;