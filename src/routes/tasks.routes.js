const { Router } = require ('express');
const controller = require ('../controllers/tasks.controller')

const router = Router();

router.get("/",controller.findAll);
router.post("/",controller.addTask);
router.delete("/:id",controller.removeTask);

//Ruta para buscar tarea por ID
router.get("/:id",controller.findByID)

//Ruta para actualizar tarea completa con PUT
router.put('/:id',controller.updateTask)

//Ruta para actualizar parcialmente con PATCH
router.patch('/:id',controller.patchTask)


module.exports = router;