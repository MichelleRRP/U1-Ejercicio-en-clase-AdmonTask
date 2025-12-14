const Task = require('../models/task.model')

exports.findAll = (req,res) => {
    const data = Task.findAll();
    res.status(200).json(data);
}


exports.addTask = (req,res) => {
const title = req.body.title;
const createdTask = Task.create(title);
res.status(201).json(createdTask);
}
 


exports.removeTask = (req,res) => {
    const id = req.params.id;
    const ok = Task.removeTask(id);
    if(!ok) {
        return res.status(404).json({message: 'TAREA NO ENCONRTADA'});
    }
    res.status(204).json({message: 'Tarea ELiminada'});
}



//Buscar tarea por su ID
exports.findByID = (req,res) => {
    const id = req.params.id //sacamos el id de la url
    const data = Task.findByID(id) //buscamos la tarea en el modelo

    if(!data){ 
        return res.status(404).json({message:'NO hay tarea'}) //si no existe mandamos 404
    }else{
    res.status(200).json(data) //si existe la regresamos
    }
}

//Actualizar tarea con PUT
exports.updateTask = (req, res) => {
  const id = req.params.id //sacamos el id
  const updated = Task.updateTask(id, req.body) //mandamos el body al modelo

  if (!updated) {
    return res.status(404).json({ message: "Tarea no encontrada" }) //si no existe mandamos 404
  }

  res.status(200).json(updated) //si existe regresamos la tarea ya actualizada
}

//Actualizar parcialmente con PATCH
exports.patchTask = (req, res) => {
  const id = req.params.id //id de la url
  const updated = Task.ChangeState(id, req.body) //aplicamos solo los cambios que llegan

  if (!updated) {
    return res.status(404).json({ message: "Tarea no encontrada" }) //si no se encontro mandamos 404
  }

  res.status(200).json(updated) //si se encontro regresamos la tarea modificada
}